import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { UserCreation } from "../../interfaces/User";
import bcrypt from "bcrypt";

export const createUserService = async ({
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
}: UserCreation) => {
  const userRepository = AppDataSource.getRepository(User);

  const emailVerify = await userRepository.findOneBy({ email: email });

  if (emailVerify) {
    throw new AppError(409, "This email already exists");
  }

  const newUser = new User();
  const hashPass = bcrypt.hashSync(password, 10);
  newUser.email = email;
  newUser.username = username;
  newUser.password = hashPass;
  newUser.firstname = firstname;
  newUser.lastname = lastname;
  newUser.city = city;
  newUser.street = street;
  newUser.number = number;
  newUser.zipcode = zipcode;
  newUser.phone = phone;

  await userRepository.save(newUser);

  return newUser;
};
