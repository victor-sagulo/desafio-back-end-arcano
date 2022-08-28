import { Request, Response } from "express";
import {
  buyProductService,
  createUserService,
  deleteUserService,
  listOneUserService,
  listUsersService,
  updateUserService,
  UserLoginService,
} from "../../services";

export class UsersController {
  static async store(req: Request, res: Response) {
    const {
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
    } = req.body;

    const createUser = await createUserService({
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
    });

    return res.status(201).json(createUser);
  }

  static async index(req: Request, res: Response) {
    const listUsers = await listUsersService();

    return res.status(200).json(listUsers);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const listOneUser = await listOneUserService(id);

    return res.status(200).json(listOneUser);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
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
    } = req.body;

    const updateUser = await updateUserService({
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
    });

    return res.status(200).json(updateUser);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteUserService(id);

    return res.status(200).json({ message: "User deleted successfully" });
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await UserLoginService({ email, password });

    return res.status(200).json(token);
  }

  static async buyProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { productId } = req.body;

    const buyProduct = await buyProductService(productId, { id });

    return res.status(201).json(buyProduct);
  }
}
