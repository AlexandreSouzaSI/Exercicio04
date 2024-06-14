import { Product } from './../entities/product';

export interface ProductRepository {
    create(data: Product): Promise<void>
    findByName(name: string): Promise<Product | null>
    findById(id: string): Promise<Product | null>
    save(data: Product): Promise<void>
    delete(data: Product): Promise<void>
}