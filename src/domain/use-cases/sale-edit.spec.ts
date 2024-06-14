import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { EditSaleUseCase } from "./sale-edit-use-case"
import { makeSale } from "@/test/factories/make-sale"

let inMemorySaleRepository: InMemorySaleRepository
let sut: EditSaleUseCase

describe('Edit sale', () => {
    beforeEach(() => {
        inMemorySaleRepository = new InMemorySaleRepository()
        sut = new EditSaleUseCase(inMemorySaleRepository)
    })

    it('should be able to edit a sale', async () => {
        const newSale = makeSale(
        {

        },
        new UniqueEntityId('sale-1')
    )

    await inMemorySaleRepository.create(newSale)

    await sut.execute({
        saleId: 'sale-1',
        price: 10,
        quantity: 1000,
        totalPrice: 10000
    })

    expect(inMemorySaleRepository.items[0]).toMatchObject({
        price: 10,
        quantity: 1000
    })
    })
})