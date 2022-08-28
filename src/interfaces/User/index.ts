import { User } from "../../entities";

export interface IUserCreation {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
  phone: string;
}

export type UserLogin = Pick<User, "email" | "password">;

export interface IUserUpdate {
  id: string;
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
  phone: string;
}

export interface IUserBuy {
  id: string;
}
