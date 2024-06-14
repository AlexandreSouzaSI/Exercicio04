import { SupplierRepository } from "../repositories/supplier-repository"

interface FetchSupplierUseCaseRequest {
    supplierId: string
}

export class FetchSupplierUseCase {
    constructor(
        private stupplierRepository: SupplierRepository
    ) {}

    async execute({
        supplierId,
    }: FetchSupplierUseCaseRequest) {

        const supplier = await this.stupplierRepository.findById(supplierId)

        return supplier
    }
}