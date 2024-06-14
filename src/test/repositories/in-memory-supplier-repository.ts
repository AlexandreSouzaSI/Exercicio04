import { Supplier } from "@/domain/entities/supplier";
import { SupplierRepository } from "@/domain/repositories/supplier-repository";

export class InMemorySupplierRepository implements SupplierRepository {
    public items: Supplier[] = []

    async create(supplier: Supplier) {
        this.items.push(supplier)
    }

    async findById(id: string) {
        const supplier = this.items.find((item) => item.id.toString() === id)

        if(!supplier) {
            return null
        }

        return supplier
    }

    async save(supplier: Supplier) {
        const itemIndex = this.items.findIndex((item) => item.id === supplier.id)

        this.items[itemIndex] = supplier
    }

    async delete(supplier: Supplier) {
        const itemIndex = this.items.findIndex((item) => item.id === supplier.id)
    
        this.items.splice(itemIndex, 1)
    }
}