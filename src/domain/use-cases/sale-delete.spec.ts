import { makeProduct } from "@/test/factories/make-product"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { DeleteSaleUseCase } from "./sale-delete-use-case"
import { makeSale } from "@/test/factories/make-sale"

let inMemorySaleRepository: InMemorySaleRepository
let sut: DeleteSaleUseCase

describe('Delete sale', () => {
    beforeEach(() => {
        inMemorySaleRepository = new InMemorySaleRepository()
        sut = new DeleteSaleUseCase(inMemorySaleRepository)
    })

    it('should be able to delete a sale', async () => {
        const newSale = makeSale(
        {

        },
        new UniqueEntityId('sale-1')
    )

    await inMemorySaleRepository.create(newSale)

    await sut.execute({
        saleId: 'sale-1',
    })

    expect(inMemorySaleRepository.items).toHaveLength(0)
    })
})