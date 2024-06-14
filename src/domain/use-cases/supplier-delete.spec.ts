import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { DeleteSupplierUseCase } from "./supplier-delete-use-case"
import { makeSupplier } from "@/test/factories/make-supplier"
import { InMemorySupplierRepository } from "@/test/repositories/in-memory-supplier-repository"

let inMemorySupplierRepository: InMemorySupplierRepository
let sut: DeleteSupplierUseCase

describe('Delete supplier', () => {
    beforeEach(() => {
        inMemorySupplierRepository = new InMemorySupplierRepository()
        sut = new DeleteSupplierUseCase(inMemorySupplierRepository)
    })

    it('should be able to delete a supplier', async () => {
        const newSupplier = makeSupplier(
        {

        },
        new UniqueEntityId('supplier-1')
    )

    await inMemorySupplierRepository.create(newSupplier)

    await sut.execute({
        supplierId: 'supplier-1',
    })

    expect(inMemorySupplierRepository.items).toHaveLength(0)
    })
})