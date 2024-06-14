import { InMemoryProductRepository } from "@/test/repositories/in-memory-product-repository"
import { CreateProductUseCase } from "./product-create-use-case"
import { InMemorySaleRepository } from "@/test/repositories/in-memory-sale-repository"
import { CreateSaleUseCase } from "./sale-create-use-case"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemorySaleRepository: InMemorySaleRepository
let sut: CreateSaleUseCase

describe('create a sale', () => {
    beforeEach(() => {
        inMemorySaleRepository = new InMemorySaleRepository()
        sut = new CreateSaleUseCase(inMemorySaleRepository)
    })

    it('should be able to create a sale', async () => {
        const sale = await sut.execute({
            produtoId: new UniqueEntityId('21'),
            price: 100,
            quantity: 10,
            totalPrice: 1000
        })

    expect(sale.price).toEqual(100)
    })
})