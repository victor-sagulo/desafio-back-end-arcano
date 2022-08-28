import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import bcrypt from "bcrypt";
import { IUserUpdate } from "../../interfaces/User";

export const updateUserService = async ({
  id,
  email,
  username,
  password,
  firstname,
  lastname,
  city,
  street,
  number,
  zipcode,
  phone,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({ id: id });

  if (!userFound) {
    throw new AppError(404, "User not found or doesn't exists");
  }

  const userUpdate = {
    id: userFound.id,
    email: email || userFound.email,
    username: username || userFound.username,
    password: password ? bcrypt.hashSync(password, 10) : userFound.password,
    firstname: firstname || userFound.firstname,
    lastname: lastname || userFound.lastname,
    city: city || userFound.city,
    street: street || userFound.street,
    number: number || userFound.number,
    zipcode: zipcode || userFound.zipcode,
    phone: phone || userFound.phone,
  };

  await userRepository.update(userFound.id, userUpdate);

  return userUpdate;
};
