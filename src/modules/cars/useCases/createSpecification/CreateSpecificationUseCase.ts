import { Specification } from "../../models/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface Irequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private _specificationRepository: SpecificationsRepository) { }

    execute({ name, description }: Irequest): Specification {
        const existingSpecification: Specification = this._specificationRepository.findByName(name)

        if (existingSpecification) {
            throw new Error("Specification already exists!")
        }

        const specification = this._specificationRepository.create({ name, description })

        return specification
    }
}

export { CreateSpecificationUseCase }