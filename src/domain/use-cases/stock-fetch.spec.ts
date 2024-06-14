import { makeProduct } from "@/test/factories/make-product"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { FetchSaleUseCase } from "./sale-fetch-use-case"
import { makeSale } from "@/test/factories/make-sale"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemoryStockRepository } from "@/test/repositories/in-memory-stock-repository"
import { FetchStockUseCase } from "./stock-fetch-use-case"
import { makeStock } from "@/test/factories/make-stock"

let inMemoryStockRepository: InMemoryStockRepository
let sut: FetchStockUseCase

describe('Fetch a sale', () => {
    beforeEach(() => {
        inMemoryStockRepository = new InMemoryStockRepository()
        sut = new FetchStockUseCase(inMemoryStockRepository)
    })

    it('should be able to fetch a sale', async () => {
        await inMemoryStockRepository.create(makeStock(
            {

            },
            new UniqueEntityId('stock-1')
        ))

        const stock = await sut.execute({
            stockId: 'stock-1'
        })

    expect(inMemoryStockRepository.items[0].id).toEqual(stock?.id)
    })
})