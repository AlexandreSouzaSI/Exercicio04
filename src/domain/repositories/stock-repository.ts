import { Stock } from './../entities/stock';

export interface StockRepository {
    create(data: Stock): Promise<void>
    findById(id: string): Promise<Stock | null>
    save(data: Stock): Promise<void>
    delete(data: Stock): Promise<void>
}