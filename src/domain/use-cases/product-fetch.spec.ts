import { InMemoryProductRepository } from "@/test/repositories/in-memory-product-repository"
import { FetchProductUseCase } from "./product-fetch-use-case"
import { makeProduct } from "@/test/factories/make-product"

let inMemoryProductRepository: InMemoryProductRepository
let sut: FetchProductUseCase

describe('Fetch a product', () => {
    beforeEach(() => {
        inMemoryProductRepository = new InMemoryProductRepository()
        sut = new FetchProductUseCase(inMemoryProductRepository)
    })

    it('should be able to fetch a product', async () => {
        await inMemoryProductRepository.create(makeProduct({
            name: 'product-1',
        }))

        const product = await sut.execute({
            name: 'product-1'
        })

    expect(product?.name).toEqual('product-1')
    })
})