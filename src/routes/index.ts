import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const routes: Router = Router()

routes.use("/categories", categoriesRoutes)
routes.use("/specifications", specificationsRoutes)

export { routes }