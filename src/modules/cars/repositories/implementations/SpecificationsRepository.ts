import { Specification } from "../../models/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private _specifications: Specification[];

    constructor() {
        this._specifications = [];
    }

    create({ name, description }: ICreateSpecificationsDTO): Specification {
        const specification: Specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date()
        })

        this._specifications.push(specification)

        return specification
    }

    findByName(name: string): Specification {
        const specification = this._specifications.find((specification)=> specification.name === name)

        return specification;
    }

}

export { SpecificationsRepository }

