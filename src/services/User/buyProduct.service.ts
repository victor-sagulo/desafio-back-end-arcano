import { AppDataSource } from "../../data-source";
import { Product } from "../../entities";
import { User } from "../../entities";
import { Cart } from "../../entities";
import { AppError } from "../../errors";
import { IUserBuy } from "../../interfaces/User";

export const buyProductService = async (
  productId: string,
  { id }: IUserBuy
) => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);
  const productRepository = AppDataSource.getRepository(Product);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found or doesn't exists");
  }

  const product = await productRepository.findOneBy({ id: productId });

  if (!product) {
    throw new AppError(404, "Product not found or doesn't exists");
  }

  const now = new Date();

  const newCart = new Cart();

  newCart.user_id = user;
  newCart.date = now;
  newCart.products = [...newCart.products, product];

  user.cart_history = [...user.cart_history, product];

  await cartRepository.save(newCart);

  return newCart;
};
