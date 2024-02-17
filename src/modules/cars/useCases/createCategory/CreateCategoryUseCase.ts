import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string
    description: string
}


class CreateCategoryUseCase {

    constructor(private _categoriesRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest): Category {

        const existingCategory = this._categoriesRepository.findByName(name)

        if (existingCategory) {
            throw new Error("Category already exists!")
        }

        const category: Category = this._categoriesRepository.create({ name, description })

        return category
    }
}

export { CreateCategoryUseCase }