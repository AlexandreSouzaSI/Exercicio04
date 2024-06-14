import { ProductRepository } from "../repositories/product-repository"

interface FetchProductUseCaseRequest {
    name: string
}

export class FetchProductUseCase {
    constructor(
        private productRepository: ProductRepository
    ) {}

    async execute({
        name,
    }: FetchProductUseCaseRequest) {

        const product = await this.productRepository.findByName(name)

        return product
    }
}