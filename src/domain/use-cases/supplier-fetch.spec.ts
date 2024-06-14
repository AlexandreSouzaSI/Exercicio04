import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemorySupplierRepository } from "@/test/repositories/in-memory-supplier-repository"
import { FetchSupplierUseCase } from "./supplier-fetch-use-case"
import { makeSupplier } from "@/test/factories/make-supplier"

let inMemorySupplierRepository: InMemorySupplierRepository
let sut: FetchSupplierUseCase

describe('Fetch a supplier', () => {
    beforeEach(() => {
        inMemorySupplierRepository = new InMemorySupplierRepository()
        sut = new FetchSupplierUseCase(inMemorySupplierRepository)
    })

    it('should be able to fetch a supplier', async () => {
        await inMemorySupplierRepository.create(makeSupplier(
            {

            },
            new UniqueEntityId('supplier-1')
        ))

        const stock = await sut.execute({
            supplierId: 'supplier-1'
        })

    expect(inMemorySupplierRepository.items[0].id).toEqual(stock?.id)
    })
})