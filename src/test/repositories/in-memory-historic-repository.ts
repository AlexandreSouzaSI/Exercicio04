import { Historic } from "@/domain/entities/historic";
import { HistoricRepository } from "@/domain/repositories/historic-repository";

export class InMemoryHistoricRepository implements HistoricRepository {
    public items: Historic[] = []

    async create(historic: Historic) {
        this.items.push(historic)
    }

    async findById(id: string) {
        const historic = this.items.find((item) => item.id.toString() === id)

        if(!historic) {
            return null
        }

        return historic
    }   
}