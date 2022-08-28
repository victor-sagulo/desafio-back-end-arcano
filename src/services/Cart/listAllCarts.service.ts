import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities";

export const listAllCartsService = () => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const carts = cartRepository.find();

  return carts;
};
