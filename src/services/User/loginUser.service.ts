import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { UserLogin } from "../../interfaces/User";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import "dotenv/config";

export const UserLoginService = async ({ email, password }: UserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({ email: email });

  if (!userFound) {
    throw new AppError(400, "Invalid email or password");
  }

  const passwordVerify = bcrypt.compareSync(password, userFound.password);

  if (!passwordVerify) {
    throw new AppError(400, "Invalid email or password");
  }

  const token = jwt.sign(
    { email: userFound.email, id: userFound.id },
    process.env.TOKEN_KEY as string,
    { expiresIn: "24h" }
  );

  return { AccessToken: token };
};
