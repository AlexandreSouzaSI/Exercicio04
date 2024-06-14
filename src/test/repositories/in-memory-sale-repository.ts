import { Sale } from "@/domain/entities/sale";
import { SaleRepository } from "@/domain/repositories/sale-repository";

export class InMemorySaleRepository implements SaleRepository {
    public items: Sale[] = []

    async create(sale: Sale) {
        this.items.push(sale)
    }

    async findById(id: string) {
        const sale = this.items.find((item) => item.id.toString() === id)

        if(!sale) {
            return null
        }

        return sale
    }

    async save(sale: Sale) {
        const itemIndex = this.items.findIndex((item) => item.id === sale.id)

        this.items[itemIndex] = sale
    }

    async delete(sale: Sale) {
        const itemIndex = this.items.findIndex((item) => item.id === sale.id)
    
        this.items.splice(itemIndex, 1)
    }
}