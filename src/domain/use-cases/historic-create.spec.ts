import { CreateHistoricUseCase } from "./historic-create-use-case"
import { InMemoryHistoricRepository } from "@/test/repositories/in-memory-historic-repository"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemoryHistoricRepository: InMemoryHistoricRepository
let sut: CreateHistoricUseCase

describe('create a historic', () => {
    beforeEach(() => {
        inMemoryHistoricRepository = new InMemoryHistoricRepository()
        sut = new CreateHistoricUseCase(inMemoryHistoricRepository)
    })

    it('should be able to create a historic', async () => {
        const historic = await sut.execute({
            saleId: new UniqueEntityId('1'),
            enDate: new Date(),
            startDate: new Date(),
        })

    expect(inMemoryHistoricRepository.items[0].saleId).toEqual(historic.saleId)
    })
})