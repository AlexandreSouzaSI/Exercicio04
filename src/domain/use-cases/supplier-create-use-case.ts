import { SupplierRepository } from "../repositories/supplier-repository"
import { Supplier } from "../entities/supplier"

interface CreateSupplierUseCaseRequest {
    name: string
    cnpj: string
}

export class CreateSupplierUseCase {
    constructor(
        private supplierRepository: SupplierRepository
    ) {}

    async execute({
        cnpj,
        name
    }: CreateSupplierUseCaseRequest) {
        const supplier = Supplier.create({
            cnpj,
            name
        })

        await this.supplierRepository.create(supplier)

        return supplier
    }
}