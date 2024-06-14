import { SupplierRepository } from "../repositories/supplier-repository"

interface EditSupplierUseCaseRequest {
    supplierId: string
    name: string
    cnpj: string
}

export class EditSupplierUseCase {
    constructor(
        private supplierRepository: SupplierRepository
    ) {}

    async execute({
        supplierId,
        cnpj,
        name
    }: EditSupplierUseCaseRequest) {
        const supplier = await this.supplierRepository.findById(supplierId)

        if(!supplier) {
            return null
        }

        supplier.name = name
        supplier.cnpj = cnpj

        await this.supplierRepository.save(supplier)

        return supplier
    }
}