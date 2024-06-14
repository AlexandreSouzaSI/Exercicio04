import { Product } from "../entities/product"
import { ProductRepository } from "../repositories/product-repository"

interface EditProductUseCaseRequest {
    productId: string
    name: string
    size: string
    color: string
    price: number
}

export class EditProductUseCase {
    constructor(
        private productRepository: ProductRepository
    ) {}

    async execute({
        productId,
        name,
        size,
        color,
        price
    }: EditProductUseCaseRequest) {
        const product = await this.productRepository.findById(productId)

        if(!product) {
            return null
        }

        product.name = name
        product.color = color
        product.size = size
        product.price = price

        await this.productRepository.save(product)

        return product
    }
}