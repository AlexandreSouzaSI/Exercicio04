import { InMemoryPurchaseOrderRepository } from "@/test/repositories/in-memory-purchaseOrder-repository"
import { CreatePurchaseOrderUseCase } from "./purchaseOrder-create-use-case"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemoryPurchaseOrderRepository: InMemoryPurchaseOrderRepository
let sut: CreatePurchaseOrderUseCase

describe('create a purchaseOrder', () => {
    beforeEach(() => {
        inMemoryPurchaseOrderRepository = new InMemoryPurchaseOrderRepository()
        sut = new CreatePurchaseOrderUseCase(inMemoryPurchaseOrderRepository)
    })

    it('should be able to create a purchaseOrder', async () => {
        const purchaseOrder = await sut.execute({
            amount: 2,
            deliveryTime: new Date(),
            price: 100,
            productId: new UniqueEntityId('2'),
            supplierId: new UniqueEntityId('1')
        })

    expect(purchaseOrder.amount).toEqual(2)
    })
})