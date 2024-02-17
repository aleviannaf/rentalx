import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class CreateCategoriesController {

    constructor(private _createCategoryUseCase: CreateCategoryUseCase ){}

    handle(request: Request, response: Response): Response{
        const {name , description} = request.body

        const category = this._createCategoryUseCase.execute({name, description})

        return response.status(201).json(category)
    }
}

export { CreateCategoriesController }