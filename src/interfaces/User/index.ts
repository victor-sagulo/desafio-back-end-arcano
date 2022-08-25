import { User } from "../../entities";

export type UserCreation = Omit<User, "id">;

export type UserLogin = Pick<User, "email" | "password">;
