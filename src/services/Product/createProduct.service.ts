import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { IProductCreation } from "../../interfaces/Product";

export const createProductService = async ({
  title,
  price,
  description,
  image,
}: IProductCreation) => {
  const productRepository = AppDataSource.getRepository(Product);

  const newProduct = new Product();
  newProduct.title = title;
  newProduct.price = price;
  newProduct.description = description;
  newProduct.image = image;

  await productRepository.save(newProduct);

  return newProduct;
};
