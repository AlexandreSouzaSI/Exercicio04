import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemoryStockRepository } from "@/test/repositories/in-memory-stock-repository"
import { CreateStockUseCase } from "./stock-create-use-case"

let inMemoryStockRepository: InMemoryStockRepository
let sut: CreateStockUseCase

describe('create a stock', () => {
    beforeEach(() => {
        inMemoryStockRepository = new InMemoryStockRepository()
        sut = new CreateStockUseCase(inMemoryStockRepository)
    })

    it('should be able to create a stock', async () => {
        const stock = await sut.execute({
            produtoId: new UniqueEntityId('21'),
            minimumStockQuantity: 10,
            stockQuantity: 15
        })

    expect(stock.stockQuantity).toEqual(15)
    })
})