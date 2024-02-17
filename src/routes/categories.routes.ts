import { Router } from "express";
import { createCategoriesController } from "../modules/cars/useCases/createCategory";



const categoriesRoutes: Router = Router();

categoriesRoutes.post("",(req, res)=> createCategoriesController.handle(req, res))

export { categoriesRoutes }