import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Historic, HistoricProps } from '@/domain/entities/historic';

export function makeHistoric(
    override: Partial<HistoricProps> = {},
    id?: UniqueEntityId,
) {
    const historic = Historic.create(
        {
            saleId: new UniqueEntityId(),
            startDate: faker.date.anytime(),
            enDate: faker.date.anytime(),
            ...override,
        },
        id,
    )

    return historic
}