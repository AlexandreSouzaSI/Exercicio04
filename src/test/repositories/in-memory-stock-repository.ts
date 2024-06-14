import { Stock } from "@/domain/entities/stock";
import { StockRepository } from "@/domain/repositories/stock-repository";

export class InMemoryStockRepository implements StockRepository {
    public items: Stock[] = []

    async create(stock: Stock) {
        this.items.push(stock)
    }

    async findById(id: string) {
        const stock = this.items.find((item) => item.id.toString() === id)

        if(!stock) {
            return null
        }

        return stock
    }

    async save(stock: Stock) {
        const itemIndex = this.items.findIndex((item) => item.id === stock.id)

        this.items[itemIndex] = stock
    }

    async delete(stock: Stock) {
        const itemIndex = this.items.findIndex((item) => item.id === stock.id)
    
        this.items.splice(itemIndex, 1)
    }
}