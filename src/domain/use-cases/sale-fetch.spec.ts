import { makeProduct } from "@/test/factories/make-product"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { FetchSaleUseCase } from "./sale-fetch-use-case"
import { makeSale } from "@/test/factories/make-sale"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemorySaleRepository: InMemorySaleRepository
let sut: FetchSaleUseCase

describe('Fetch a sale', () => {
    beforeEach(() => {
        inMemorySaleRepository = new InMemorySaleRepository()
        sut = new FetchSaleUseCase(inMemorySaleRepository)
    })

    it('should be able to fetch a sale', async () => {
        await inMemorySaleRepository.create(makeSale(
            {

            },
            new UniqueEntityId('sale-1')
        ))

        const sale = await sut.execute({
            saleId: 'sale-1'
        })

    expect(inMemorySaleRepository.items[0].id).toEqual(sale?.id)
    })
})