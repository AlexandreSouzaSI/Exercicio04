import { makeProduct } from "@/test/factories/make-product"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { InMemoryPurchaseOrderRepository } from "@/test/repositories/in-memory-purchaseOrder-repository"
import { DeletePurchaseOrderUseCase } from "./purchaseOrder-delete-use-case"
import { makePurchaseOrder } from "@/test/factories/make-purrchaseOrder"

let inMemoryPurchaseOrderRepository: InMemoryPurchaseOrderRepository
let sut: DeletePurchaseOrderUseCase

describe('Delete purchaseOrder', () => {
    beforeEach(() => {
        inMemoryPurchaseOrderRepository = new InMemoryPurchaseOrderRepository()
        sut = new DeletePurchaseOrderUseCase(inMemoryPurchaseOrderRepository)
    })

    it('should be able to delete a purchaseOrder', async () => {
        const newPurchaseOrder = makePurchaseOrder(
        {

        },
        new UniqueEntityId('product-1')
    )

    await inMemoryPurchaseOrderRepository.create(newPurchaseOrder)

    await sut.execute({
        purchaseId: 'product-1',
    })

    expect(inMemoryPurchaseOrderRepository.items).toHaveLength(0)
    })
})