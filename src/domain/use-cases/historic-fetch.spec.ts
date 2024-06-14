import { InMemoryHistoricRepository } from "@/test/repositories/in-memory-historic-repository"
import { FetchHistoricUseCase } from "./historic-fetch-use-case"
import { makeHistoric } from "@/test/factories/make-historic"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemoryHistoricRepository: InMemoryHistoricRepository
let sut: FetchHistoricUseCase

describe('Fetch a historic', () => {
    beforeEach(() => {
        inMemoryHistoricRepository = new InMemoryHistoricRepository()
        sut = new FetchHistoricUseCase(inMemoryHistoricRepository)
    })

    it('should be able to fetch a historic', async () => {
        await inMemoryHistoricRepository.create(makeHistoric(
        {

        },
        new UniqueEntityId('product-1')
    ))

        const historic = await sut.execute({
            historicId: 'product-1'
        })

    expect(inMemoryHistoricRepository.items[0].id).toEqual(historic?.id)
    })
})