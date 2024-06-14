import { makeProduct } from "@/test/factories/make-product"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemoryPurchaseOrderRepository } from "@/test/repositories/in-memory-purchaseOrder-repository"
import { EditPurchaseOrderUseCase } from "./purchaseOrder-edit-use-case"
import { makePurchaseOrder } from "@/test/factories/make-purrchaseOrder"

let inMemoryPurchaseOrderRepository: InMemoryPurchaseOrderRepository
let sut: EditPurchaseOrderUseCase

describe('Edit purchaseOrder', () => {
    beforeEach(() => {
        inMemoryPurchaseOrderRepository = new InMemoryPurchaseOrderRepository()
        sut = new EditPurchaseOrderUseCase(inMemoryPurchaseOrderRepository)
    })

    it('should be able to edit a purchaseOrder', async () => {
        const newPurchaseOrder = makePurchaseOrder(
        {

        },
        new UniqueEntityId('purchaseOrder-1')
    )

    await inMemoryPurchaseOrderRepository.create(newPurchaseOrder)

    await sut.execute({
        purchaseId: 'purchaseOrder-1',
        amount: 10,
        deliveryTime: new Date(),
        price: 100,
        productId: new UniqueEntityId('1'),
        supplierId: new UniqueEntityId('1')
    })

    expect(inMemoryPurchaseOrderRepository.items[0]).toMatchObject({
        amount: 10,
        price: 100
    })
    })
})