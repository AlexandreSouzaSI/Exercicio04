import { HistoricRepository } from "../repositories/historic-repository"

interface FetchHistoricUseCaseRequest {
    historicId: string
}

export class FetchHistoricUseCase {
    constructor(
        private historicRepository: HistoricRepository
    ) {}

    async execute({
        historicId,
    }: FetchHistoricUseCaseRequest) {
        const historic = await this.historicRepository.findById(historicId)

        if(!historic) {
            return null
        }

        return historic
    }
}