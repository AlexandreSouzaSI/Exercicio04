import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { HistoricRepository } from "../repositories/historic-repository"
import { Historic } from "../entities/historic"

interface CreateHistoricUseCaseRequest {
    saleId: UniqueEntityId
    startDate: Date
    enDate: Date
}

export class CreateHistoricUseCase {
    constructor(
        private historicRepository: HistoricRepository
    ) {}

    async execute({
        saleId,
        enDate,
        startDate
    }: CreateHistoricUseCaseRequest) {
        const historic = Historic.create({
            enDate,
            saleId,
            startDate
        })

        await this.historicRepository.create(historic)

        return historic
    }
}