import { ProductRepository } from "../repositories/product-repository"

interface DeleteProductUseCaseRequest {
    productId: string
}

export class DeleteProductUseCase {
    constructor(
        private productRepository: ProductRepository
    ) {}

    async execute({
        productId,
    }: DeleteProductUseCaseRequest) {
        const product = await this.productRepository.findById(productId)

        if(!product) {
            return null
        }

        await this.productRepository.delete(product)

        return product
    }
}