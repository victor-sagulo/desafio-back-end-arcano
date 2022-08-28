import { Router } from "express";
import { CartsController } from "../../controllers";

const cartRoutes = Router();

cartRoutes.get("/", CartsController.index);
cartRoutes.get("/cart-history/user/:id", CartsController.cartHistory);

export default cartRoutes;
