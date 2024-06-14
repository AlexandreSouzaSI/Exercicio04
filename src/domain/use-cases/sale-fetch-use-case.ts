import { SaleRepository } from "../repositories/sale-repository"

interface FetchSaleUseCaseRequest {
    saleId: string
}

export class FetchSaleUseCase {
    constructor(
        private productRepository: SaleRepository
    ) {}

    async execute({
        saleId,
    }: FetchSaleUseCaseRequest) {

        const sale = await this.productRepository.findById(saleId)

        return sale
    }
}