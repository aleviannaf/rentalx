import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes: Router = Router();

specificationsRoutes.post("",(req, res)=> createSpecificationController.handle(req, res))

export { specificationsRoutes }