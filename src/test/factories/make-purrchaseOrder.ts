import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { PurchaseOrder, PurchaseOrderProps } from '@/domain/entities/purchaseOrder';

export function makePurchaseOrder(
    override: Partial<PurchaseOrderProps> = {},
    id?: UniqueEntityId,
) {
    const purchaseOrder = PurchaseOrder.create(
        {
            productId: new UniqueEntityId(),
            supplierId: new UniqueEntityId(),
            amount: faker.number.int(),
            price: faker.number.float(),
            deliveryTime: faker.date.anytime(),
            ...override,
        },
        id,
    )

    return purchaseOrder
}