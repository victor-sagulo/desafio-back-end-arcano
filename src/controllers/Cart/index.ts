import { Request, Response } from "express";
import { listAllCartsService } from "../../services";
import { listUserCartHistory } from "../../services/Cart/listUserCartHistory.service";

export class CartsController {
  static async index(req: Request, res: Response) {
    const cartsList = await listAllCartsService();

    return res.status(201).json(cartsList);
  }

  static async cartHistory(req: Request, res: Response) {
    const { id } = req.params;

    const userCartHistory = await listUserCartHistory(id);

    return res.status(200).json(userCartHistory);
  }
}
