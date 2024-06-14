import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { PurchaseOrderRepository } from "../repositories/purchaseOrder-repository"

interface EditPurchaseOrderUseCaseRequest {
    purchaseId: string
    supplierId: UniqueEntityId
    productId: UniqueEntityId
    amount: number
    price: number
    deliveryTime: Date
}

export class EditPurchaseOrderUseCase {
    constructor(
        private purchaseOrderRepository: PurchaseOrderRepository
    ) {}

    async execute({
        productId,
        amount,
        deliveryTime,
        price,
        purchaseId,
        supplierId
    }: EditPurchaseOrderUseCaseRequest) {
        const purchaseOrder = await this.purchaseOrderRepository.findById(purchaseId.toString())

        if(!purchaseOrder) {
            return null
        }

        purchaseOrder.amount = amount,
        purchaseOrder.price = price,
        purchaseOrder.deliveryTime = deliveryTime,
        purchaseOrder.productId = productId,
        purchaseOrder.supplierId = supplierId,

        await this.purchaseOrderRepository.save(purchaseOrder)

        return purchaseOrder
    }
}