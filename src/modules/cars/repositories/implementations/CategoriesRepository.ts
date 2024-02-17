import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository  implements ICategoriesRepository{
    private _categories: Category[];

    private static INSTACE: CategoriesRepository;

    private constructor(){
        this._categories = [];
    }


    public static getInstace(): CategoriesRepository{
        if(!CategoriesRepository.INSTACE){
            CategoriesRepository.INSTACE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTACE;
    }

    create({ name, description }: ICreateCategoryDTO) {

        const category: Category = new Category()

        Object.assign(category, {
            name,
            description,
            createdAt: new Date()
        })

        this._categories.push(category)

        return category
    }

    findByName(name: string): Category{
        const category = this._categories.find(category => category.name === name)

        return category
    }

    list(): Category[]{
        return this._categories
    }
}

export { CategoriesRepository }