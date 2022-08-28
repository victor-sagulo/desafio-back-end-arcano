import { Product } from "../../entities";

export interface IProductCreation {
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface IProductUpdate {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}
