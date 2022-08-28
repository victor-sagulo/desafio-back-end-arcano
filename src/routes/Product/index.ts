import { Router } from "express";
import { ProductsController } from "../../controllers";

const productRoutes = Router();

productRoutes.get("/", ProductsController.index);
productRoutes.get("/:id", ProductsController.show);
productRoutes.post("/", ProductsController.store);
productRoutes.patch("/:id", ProductsController.update);
productRoutes.delete("/:id", ProductsController.delete);

export default productRoutes;
