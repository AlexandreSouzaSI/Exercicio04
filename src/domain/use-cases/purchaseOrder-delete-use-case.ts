import { PurchaseOrderRepository } from "../repositories/purchaseOrder-repository"

interface DeletePurchaseOrderUseCaseRequest {
    purchaseId: string
}

export class DeletePurchaseOrderUseCase {
    constructor(
        private purchaseOrderRepository: PurchaseOrderRepository
    ) {}

    async execute({
        purchaseId,
    }: DeletePurchaseOrderUseCaseRequest) {
        const purchaseOrder = await this.purchaseOrderRepository.findById(purchaseId)

        if(!purchaseOrder) {
            return null
        }

        await this.purchaseOrderRepository.delete(purchaseOrder)

        return purchaseOrder
    }
}