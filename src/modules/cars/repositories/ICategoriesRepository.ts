import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: String): Category;
    create({ name, description }: ICreateCategoryDTO): Category;
    list(): Category[];
}

export {ICategoriesRepository, ICreateCategoryDTO}