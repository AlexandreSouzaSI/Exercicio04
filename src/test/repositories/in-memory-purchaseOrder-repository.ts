import { PurchaseOrder } from "@/domain/entities/purchaseOrder";
import { PurchaseOrderRepository } from "@/domain/repositories/purchaseOrder-repository";

export class InMemoryPurchaseOrderRepository implements PurchaseOrderRepository {
    public items: PurchaseOrder[] = []

    async create(purchaseOrder: PurchaseOrder) {
        this.items.push(purchaseOrder)
    }

    async findById(id: string) {
        const purchaseOrder = this.items.find((item) => item.id.toString() === id)

        if(!purchaseOrder) {
            return null
        }

        return purchaseOrder
    }

    async save(purchaseOrder: PurchaseOrder) {
        const itemIndex = this.items.findIndex((item) => item.id === purchaseOrder.id)

        this.items[itemIndex] = purchaseOrder
    }

    async delete(purchaseOrder: PurchaseOrder) {
        const itemIndex = this.items.findIndex((item) => item.id === purchaseOrder.id)
    
        this.items.splice(itemIndex, 1)
    }  
}