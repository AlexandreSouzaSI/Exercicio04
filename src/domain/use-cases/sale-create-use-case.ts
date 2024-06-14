import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Sale } from "../entities/sale"
import { SaleRepository } from "../repositories/sale-repository"

interface CreateSaleUseCaseRequest {
    quantity: number
    price: number
    totalPrice: number
    produtoId: UniqueEntityId
}

export class CreateSaleUseCase {
    constructor(
        private saleRepository: SaleRepository
    ) {}

    async execute({
        price,
        quantity,
        produtoId
    }: CreateSaleUseCaseRequest) {
        const sale = Sale.create({
            produtoId,
            price,
            quantity,
            totalPrice: price * quantity
        })

        await this.saleRepository.create(sale)

        return sale
    }
}