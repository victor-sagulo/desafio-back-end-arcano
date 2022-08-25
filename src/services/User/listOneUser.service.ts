import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export const listOneStudentService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found or doesn't exists");
  }

  return user;
};
