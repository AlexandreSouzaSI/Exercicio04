import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface PurchaseOrderProps {
    supplierId: UniqueEntityId
    productId: UniqueEntityId
    amount: number
    price: number
    createdAt: Date
    updatedAt?: Date
    deliveryTime: Date
}

export class PurchaseOrder extends Entity<PurchaseOrderProps> {

    get supplierId() {
        return this.props.supplierId
    }

    get productId() {
        return this.props.productId
    }

    get amount() {
        return this.props.amount
    }

    get price() {
        return this.props.price
    }

    get deliveryTime() {
        return this.props.deliveryTime
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    private touch() {
        this.props.updatedAt = new Date()
    }

    set supplierId(supplierId: UniqueEntityId) {
        this.props.supplierId = supplierId
        this.touch()
    }

    set productId(productId: UniqueEntityId) {
        this.props.productId = productId
        this.touch()
    }

    set amount(amount: number) {
        this.props.amount = amount
        this.touch()
    }

    set price(price: number) {
        this.props.price = price
        this.touch()
    }

    set deliveryTime(deliveryTime: Date) {
        this.props.deliveryTime = deliveryTime
        this.touch()
    }

    static create(props: Optional<PurchaseOrderProps, 'createdAt'>, id?: UniqueEntityId) {
        const purchaseOrder = new PurchaseOrder({
            ...props,
            createdAt: new Date(),
        }, id)

        return purchaseOrder
    }
}