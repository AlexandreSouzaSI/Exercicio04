import { InMemoryProductRepository } from "@/test/repositories/in-memory-product-repository"
import { CreateProductUseCase } from "./product-create-use-case"

let inMemoryProductRepository: InMemoryProductRepository
let sut: CreateProductUseCase

describe('create a product', () => {
    beforeEach(() => {
        inMemoryProductRepository = new InMemoryProductRepository()
        sut = new CreateProductUseCase(inMemoryProductRepository)
    })

    it('should be able to create a product', async () => {
        const product = await sut.execute({
            name: 'Refrigerante',
            size: "Pequeno",
            color: "Vermelho",
            price: 2.00
        })

    expect(product.name).toEqual('Refrigerante')
    })
})