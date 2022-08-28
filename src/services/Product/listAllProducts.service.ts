import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";

export const listAllProductsService = () => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = productRepository.find();

  return products;
};
