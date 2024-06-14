import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { PurchaseOrderRepository } from "../repositories/purchaseOrder-repository"
import { PurchaseOrder } from "../entities/purchaseOrder"

interface CreatePurchaseOrderUseCaseRequest {
    supplierId: UniqueEntityId
    productId: UniqueEntityId
    amount: number
    price: number
    deliveryTime: Date
}

export class CreatePurchaseOrderUseCase {
    constructor(
        private purchaseOrderRepository: PurchaseOrderRepository
    ) {}

    async execute({
        amount,
        deliveryTime,
        price,
        productId,
        supplierId,        
    }: CreatePurchaseOrderUseCaseRequest) {
        const purchaseOrder = PurchaseOrder.create({
            amount,
            deliveryTime,
            price,
            productId,
            supplierId,
        })

        await this.purchaseOrderRepository.create(purchaseOrder)

        return purchaseOrder
    }
}