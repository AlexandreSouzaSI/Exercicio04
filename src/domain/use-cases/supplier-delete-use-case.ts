import { SupplierRepository } from "../repositories/supplier-repository"

interface DeleteSupplierUseCaseRequest {
    supplierId: string
}

export class DeleteSupplierUseCase {
    constructor(
        private supplierRepository: SupplierRepository
    ) {}

    async execute({
        supplierId,
    }: DeleteSupplierUseCaseRequest) {
        const supplier = await this.supplierRepository.findById(supplierId)

        if(!supplier) {
            return null
        }

        await this.supplierRepository.delete(supplier)

        return supplier
    }
}