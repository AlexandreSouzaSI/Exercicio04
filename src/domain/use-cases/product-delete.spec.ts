import { InMemoryProductRepository } from "@/test/repositories/in-memory-product-repository"
import { makeProduct } from "@/test/factories/make-product"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { DeleteProductUseCase } from "./product-delete-use-case"

let inMemoryProductRepository: InMemoryProductRepository
let sut: DeleteProductUseCase

describe('Delete product', () => {
    beforeEach(() => {
        inMemoryProductRepository = new InMemoryProductRepository()
        sut = new DeleteProductUseCase(inMemoryProductRepository)
    })

    it('should be able to delete a product', async () => {
        const newProduct = makeProduct(
        {

        },
        new UniqueEntityId('product-1')
    )

    await inMemoryProductRepository.create(newProduct)

    await sut.execute({
        productId: 'product-1',
    })

    expect(inMemoryProductRepository.items).toHaveLength(0)
    })
})