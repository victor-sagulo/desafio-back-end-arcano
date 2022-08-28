import { Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  listAllProductsService,
  listOneProductService,
  updateProductService,
} from "../../services";

export class ProductsController {
  static async store(req: Request, res: Response) {
    const { title, price, description, image } = req.body;

    const createProduct = await createProductService({
      title,
      price,
      description,
      image,
    });

    return res.status(201).json(createProduct);
  }

  static async index(req: Request, res: Response) {
    const productList = await listAllProductsService();

    return res.status(200).json(productList);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const listOneProduct = await listOneProductService(id);

    return res.status(200).json(listOneProduct);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, price, description, image } = req.body;

    const updateProduct = await updateProductService({
      id,
      title,
      price,
      description,
      image,
    });

    return res.status(200).json(updateProduct);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteProductService(id);

    return res.status(200).json({ message: "Product deleted successfully" });
  }
}
