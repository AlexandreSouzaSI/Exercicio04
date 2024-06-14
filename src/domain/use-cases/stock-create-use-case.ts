import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { StockRepository } from "../repositories/stock-repository"
import { Stock } from "../entities/stock"

interface CreateStockUseCaseRequest {
    produtoId?: UniqueEntityId
    minimumStockQuantity: number
    stockQuantity: number
}

export class CreateStockUseCase {
    constructor(
        private stockRepository: StockRepository
    ) {}

    async execute({
        minimumStockQuantity,
        stockQuantity,
        produtoId
    }: CreateStockUseCaseRequest) {
        const stock = Stock.create({
            produtoId,
            minimumStockQuantity,
            stockQuantity
        })

        await this.stockRepository.create(stock)

        return stock
    }
}