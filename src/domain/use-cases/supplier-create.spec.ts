import { InMemorySupplierRepository } from "@/test/repositories/in-memory-supplier-repository"
import { CreateSupplierUseCase } from "./supplier-create-use-case"

let inMemorySupplierRepository: InMemorySupplierRepository
let sut: CreateSupplierUseCase

describe('create a supplier', () => {
    beforeEach(() => {
        inMemorySupplierRepository = new InMemorySupplierRepository()
        sut = new CreateSupplierUseCase(inMemorySupplierRepository)
    })

    it('should be able to create a supplier', async () => {
        const supplier = await sut.execute({
            name: "Alexandre",
            cnpj: "080051215412"
        })

    expect(supplier.name).toEqual("Alexandre")
    })
})