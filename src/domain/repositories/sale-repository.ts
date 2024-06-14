import { Sale } from './../entities/sale';

export interface SaleRepository {
    create(data: Sale): Promise<void>
    findById(id: string): Promise<Sale | null>
    save(data: Sale): Promise<void>
    delete(data: Sale): Promise<void>
}