import { Supplier } from './../entities/supplier';

export interface SupplierRepository {
    create(data: Supplier): Promise<void>
    findById(id: string): Promise<Supplier | null>
    save(data: Supplier): Promise<void>
    delete(data: Supplier): Promise<void>
}