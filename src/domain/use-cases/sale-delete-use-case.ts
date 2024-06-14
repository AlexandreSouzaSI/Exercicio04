import { ProductRepository } from "../repositories/product-repository"
import { SaleRepository } from "../repositories/sale-repository"

interface DeleteSaleUseCaseRequest {
    saleId: string
}

export class DeleteSaleUseCase {
    constructor(
        private saleRepository: SaleRepository
    ) {}

    async execute({
        saleId,
    }: DeleteSaleUseCaseRequest) {
        const sale = await this.saleRepository.findById(saleId)

        if(!sale) {
            return null
        }

        await this.saleRepository.delete(sale)

        return sale
    }
}