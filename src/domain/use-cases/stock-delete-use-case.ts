import { StockRepository } from "../repositories/stock-repository"

interface DeleteStockUseCaseRequest {
    stockId: string
}

export class DeleteStockUseCase {
    constructor(
        private saleRepository: StockRepository
    ) {}

    async execute({
        stockId,
    }: DeleteStockUseCaseRequest) {
        const stock = await this.saleRepository.findById(stockId)

        if(!stock) {
            return null
        }

        await this.saleRepository.delete(stock)

        return stock
    }
}