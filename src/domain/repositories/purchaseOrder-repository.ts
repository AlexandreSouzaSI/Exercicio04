import { PurchaseOrder } from './../entities/purchaseOrder';

export interface PurchaseOrderRepository {
    create(data: PurchaseOrder): Promise<void>
    findById(id: string): Promise<PurchaseOrder | null>
    save(data: PurchaseOrder): Promise<void>
    delete(data: PurchaseOrder): Promise<void>
} 