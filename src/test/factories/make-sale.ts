import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Sale, SaleProps } from '@/domain/entities/sale';

export function makeSale(
    override: Partial<SaleProps> = {},
    id?: UniqueEntityId,
) {
    const sale = Sale.create(
        {
            price: faker.number.int(),
            quantity: faker.number.int(),
            totalPrice: faker.number.int(),
            ...override,
        },
        id,
    )

    return sale
}