import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const listUsersService = () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
};
