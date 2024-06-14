import { InMemoryPurchaseOrderRepository } from "@/test/repositories/in-memory-purchaseOrder-repository"
import { FetchPurchaseOrderUseCase } from "./purchaseOrder-fetch-use-case"
import { makePurchaseOrder } from "@/test/factories/make-purrchaseOrder"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

let inMemoryPurchaseOrderRepository: InMemoryPurchaseOrderRepository
let sut: FetchPurchaseOrderUseCase

describe('Fetch a purchaseOrder', () => {
    beforeEach(() => {
        inMemoryPurchaseOrderRepository = new InMemoryPurchaseOrderRepository()
        sut = new FetchPurchaseOrderUseCase(inMemoryPurchaseOrderRepository)
    })

    it('should be able to fetch a purchaseOrder', async () => {
        await inMemoryPurchaseOrderRepository.create(makePurchaseOrder(
        {
        },
        new UniqueEntityId('1')
    ))

        const purchaseOrder = await sut.execute({
            purchaseId: '1'
        })

    expect(inMemoryPurchaseOrderRepository.items[0].id).toEqual(purchaseOrder?.id)
    })
})