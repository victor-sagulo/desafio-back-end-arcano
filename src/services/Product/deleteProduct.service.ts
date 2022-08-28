import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { AppError } from "../../errors";

export const deleteProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const productFound = await productRepository.findOneBy({ id: id });

  if (!productFound) {
    throw new AppError(404, "Product not found or doesn't exists");
  }

  await productRepository.delete(productFound);

  return true;
};
