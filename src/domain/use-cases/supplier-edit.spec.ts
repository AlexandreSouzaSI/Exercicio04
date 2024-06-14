import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemorySupplierRepository } from "@/test/repositories/in-memory-supplier-repository"
import { EditSupplierUseCase } from "./supplier-edit-use-case"
import { makeSupplier } from "@/test/factories/make-supplier"

let inMemorySupplierRepository: InMemorySupplierRepository
let sut: EditSupplierUseCase

describe('Edit stock', () => {
    beforeEach(() => {
        inMemorySupplierRepository = new InMemorySupplierRepository()
        sut = new EditSupplierUseCase(inMemorySupplierRepository)
    })

    it('should be able to edit a stock', async () => {
        const newSupplier = makeSupplier(
        {

        },
        new UniqueEntityId('supplier-1')
    )

    await inMemorySupplierRepository.create(newSupplier)

    await sut.execute({
        supplierId: 'supplier-1',
        cnpj: "10923387",
        name: "Nome Teste"
    })

    expect(inMemorySupplierRepository.items[0]).toMatchObject({
        cnpj: "10923387",
        name: "Nome Teste"
    })
    })
})