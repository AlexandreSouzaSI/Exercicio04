import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemoryStockRepository } from "@/test/repositories/in-memory-stock-repository"
import { EditStockUseCase } from "./stock-edit-use-case"
import { makeStock } from "@/test/factories/make-stock"

let inMemoryStockRepository: InMemoryStockRepository
let sut: EditStockUseCase

describe('Edit stock', () => {
    beforeEach(() => {
        inMemoryStockRepository = new InMemoryStockRepository()
        sut = new EditStockUseCase(inMemoryStockRepository)
    })

    it('should be able to edit a stock', async () => {
        const newStock = makeStock(
        {

        },
        new UniqueEntityId('stock-1')
    )

    await inMemoryStockRepository.create(newStock)

    await sut.execute({
        saleId: 'stock-1',
        minimumStockQuantity: 5,
        stockQuantity: 10
    })

    expect(inMemoryStockRepository.items[0]).toMatchObject({
        minimumStockQuantity: 5,
        stockQuantity: 10
    })
    })
})