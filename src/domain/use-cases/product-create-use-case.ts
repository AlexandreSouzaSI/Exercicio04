import { Product } from "../entities/product"
import { ProductRepository } from "../repositories/product-repository"

interface CreateProductUseCaseRequest {
    name: string
    size: string
    color: string
    price: number
}

export class CreateProductUseCase {
    constructor(
        private productRepository: ProductRepository
    ) {}

    async execute({
        name,
        size,
        color,
        price
    }: CreateProductUseCaseRequest) {
        const product = Product.create({
            name,
            color,
            size,
            price
        })

        await this.productRepository.create(product)

        return product
    }
}