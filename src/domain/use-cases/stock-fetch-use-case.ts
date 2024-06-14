import { StockRepository } from "../repositories/stock-repository"

interface FetchStockUseCaseRequest {
    stockId: string
}

export class FetchStockUseCase {
    constructor(
        private stockRepository: StockRepository
    ) {}

    async execute({
        stockId,
    }: FetchStockUseCaseRequest) {

        const sale = await this.stockRepository.findById(stockId)

        return sale
    }
}