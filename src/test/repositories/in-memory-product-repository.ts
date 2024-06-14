import { Product } from "@/domain/entities/product";
import { ProductRepository } from "@/domain/repositories/product-repository";

export class InMemoryProductRepository implements ProductRepository {
    public items: Product[] = []

    async create(product: Product) {
        this.items.push(product)
    }

    async findByName(name: string) {
        const product = this.items.find((item) => item.name === name)

        if(!product) {
            return null
        }

        return product
    }

    async findById(id: string) {
        const product = this.items.find((item) => item.id.toString() === id)

        if(!product) {
            return null
        }

        return product
    }

    async save(product: Product) {
        const itemIndex = this.items.findIndex((item) => item.id === product.id)

        this.items[itemIndex] = product
    }

    async delete(product: Product) {
        const itemIndex = this.items.findIndex((item) => item.id === product.id)
    
        this.items.splice(itemIndex, 1)
    }
}