import { Router } from "express";
import { UsersController } from "../../controllers";

const userRoutes = Router();

userRoutes.get("/", UsersController.index);
userRoutes.get("/:id", UsersController.show);
userRoutes.post("/", UsersController.store);
userRoutes.post("/login", UsersController.login);
userRoutes.post("/buy/:id", UsersController.buyProduct);
userRoutes.patch("/:id", UsersController.update);
userRoutes.delete("/:id");

export default userRoutes;
