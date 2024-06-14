import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Stock, StockProps } from '@/domain/entities/stock';

export function makeStock(
    override: Partial<StockProps> = {},
    id?: UniqueEntityId,
) {
    const stock = Stock.create(
        {
            produtoId: new UniqueEntityId(),
            minimumStockQuantity: faker.number.int(),
            stockQuantity: faker.number.int(),
            ...override,
        },
        id,
    )

    return stock
}