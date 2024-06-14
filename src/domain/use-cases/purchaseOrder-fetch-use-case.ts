import { ProductRepository } from "../repositories/product-repository"
import { PurchaseOrderRepository } from "../repositories/purchaseOrder-repository"

interface FetchPurchaseOrderUseCaseRequest {
    purchaseId: string
}

export class FetchPurchaseOrderUseCase {
    constructor(
        private purchaseOrderRepository: PurchaseOrderRepository
    ) {}

    async execute({
        purchaseId,
    }: FetchPurchaseOrderUseCaseRequest) {

        const purchaseOrder = await this.purchaseOrderRepository.findById(purchaseId)

        return purchaseOrder
    }
}