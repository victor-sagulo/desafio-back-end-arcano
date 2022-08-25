import { Express } from "express";

import cartRoutes from "./Cart";
import productRoutes from "./Product";
import userRoutes from "./User";

export const useRoutes = (app: Express) => {
  app.use("/carts", cartRoutes);
  app.use("/products", productRoutes);
  app.use("/users", userRoutes);
};
