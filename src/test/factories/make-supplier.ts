import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Supplier, SupplierProps } from '@/domain/entities/supplier';

export function makeSupplier(
    override: Partial<SupplierProps> = {},
    id?: UniqueEntityId,
) {
    const supplier = Supplier.create(
        {
            name: faker.lorem.sentence(),
            cnpj: faker.lorem.sentence(),
            ...override,
        },
        id,
    )

    return supplier
}