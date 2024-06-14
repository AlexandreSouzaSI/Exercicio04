import { Historic } from './../entities/historic';

export interface HistoricRepository {
    create(data: Historic): Promise<void>
    findById(id: string): Promise<Historic | null>
}