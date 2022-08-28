import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({ id: id });

  if (!userFound) {
    throw new AppError(404, "User not found or doesn't exists");
  }

  await userRepository.delete(userFound);

  return true;
};
