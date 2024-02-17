import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";

const routes: Router = Router()

routes.use("/categories", categoriesRoutes)