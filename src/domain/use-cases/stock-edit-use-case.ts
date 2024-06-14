import { StockRepository } from "../repositories/stock-repository"

interface EditStockUseCaseRequest {
    saleId: string
    minimumStockQuantity: number
    stockQuantity: number
}

export class EditStockUseCase {
    constructor(
        private stockRepository: StockRepository
    ) {}

    async execute({
        saleId,
        minimumStockQuantity,
        stockQuantity,
    }: EditStockUseCaseRequest) {
        const stock = await this.stockRepository.findById(saleId)

        if(!stock) {
            return null
        }

        stock.minimumStockQuantity = minimumStockQuantity
        stock.stockQuantity = stockQuantity

        await this.stockRepository.save(stock)

        return stock
    }
}