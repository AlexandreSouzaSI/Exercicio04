import { InMemoryProductRepository } from "@/test/repositories/in-memory-product-repository"
import { makeProduct } from "@/test/factories/make-product"
import { EditProductUseCase } from "./product-edit-use-case"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemoryProductRepository: InMemoryProductRepository
let sut: EditProductUseCase

describe('Edit product', () => {
    beforeEach(() => {
        inMemoryProductRepository = new InMemoryProductRepository()
        sut = new EditProductUseCase(inMemoryProductRepository)
    })

    it('should be able to edit a product', async () => {
        const newProduct = makeProduct(
        {

        },
        new UniqueEntityId('product-1')
    )

    await inMemoryProductRepository.create(newProduct)

    await sut.execute({
        productId: 'product-1',
        color: "red",
        name: "Salgado",
        price: 5,
        size: "2"
    })

    expect(inMemoryProductRepository.items[0]).toMatchObject({
        name: "Salgado",
        color: "red"
    })
    })
})