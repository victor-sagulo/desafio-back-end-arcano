import "express-async-errors";
import express from "express";
import { handleErrors } from "./errors";
import SwaggerUI from "swagger-ui-express";
import swaggerDoc from "../swagger-output.json";
import { useRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use("/doc", SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

useRoutes(app);

app.use(handleErrors);

export { app };
