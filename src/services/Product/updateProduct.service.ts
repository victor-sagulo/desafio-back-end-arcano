import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { AppError } from "../../errors";
import { IProductUpdate } from "../../interfaces/Product";

export const updateProductService = async ({
  id,
  title,
  price,
  description,
  image,
}: IProductUpdate) => {
  const productRepository = AppDataSource.getRepository(Product);

  const productFound = await productRepository.findOneBy({ id: id });

  if (!productFound) {
    throw new AppError(404, "Product not found or doesn't exists");
  }

  const productUpdated = {
    id: productFound.id,
    title: title || productFound.title,
    price: price || productFound.price,
    description: description || productFound.description,
    image: image || productFound.image,
  };

  await productRepository.update(productFound.id, productUpdated);

  return productUpdated;
};
