import { makeProduct } from "@/test/factories/make-product"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { DeleteSaleUseCase } from "./sale-delete-use-case"
import { makeSale } from "@/test/factories/make-sale"
import { InMemoryStockRepository } from "@/test/repositories/in-memory-stock-repository"
import { DeleteStockUseCase } from "./stock-delete-use-case"
import { makeStock } from "@/test/factories/make-stock"

let inMemoryStockRepository: InMemoryStockRepository
let sut: DeleteStockUseCase

describe('Delete stock', () => {
    beforeEach(() => {
        inMemoryStockRepository = new InMemoryStockRepository()
        sut = new DeleteStockUseCase(inMemoryStockRepository)
    })

    it('should be able to delete a stock', async () => {
        const newStock = makeStock(
        {

        },
        new UniqueEntityId('stock-1')
    )

    await inMemoryStockRepository.create(newStock)

    await sut.execute({
        stockId: 'stock-1',
    })

    expect(inMemoryStockRepository.items).toHaveLength(0)
    })
})