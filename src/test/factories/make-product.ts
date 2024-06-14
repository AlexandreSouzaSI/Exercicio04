import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Product, ProductProps } from "@/domain/entities/product";

export function makeProduct(
    override: Partial<ProductProps> = {},
    id?: UniqueEntityId,
) {
    const product = Product.create(
        {
            color: faker.lorem.sentence(),
            name: faker.lorem.sentence(),
            price: faker.number.float(),
            size: faker.lorem.sentence(),
            ...override,
        },
        id,
    )

    return product
}