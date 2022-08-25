import { Product } from "../../entities";

export type ProductCreation = Omit<Product, "id">;
