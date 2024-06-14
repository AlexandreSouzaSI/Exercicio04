import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface SaleProps {
    produtoId?: UniqueEntityId
    quantity: number
    price: number
    totalPrice: number
    createdAt: Date
    updatedAt?: Date
}

export class Sale extends Entity<SaleProps> {

    get produtoId() {
        return this.props.produtoId
    }

    get quantity() {
        return this.props.quantity
    }

    get price() {
        return this.props.price
    }

    get totalPrice() {
        return this.props.totalPrice
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

    set quantity(quantity: number) {
        this.props.quantity = quantity
        this.touch()
    }

    set price(price: number) {
        this.props.price = price
        this.touch()
    }

    set totalPrice(totalPrice: number) {
        this.props.totalPrice = totalPrice
        this.touch()
    }


    static create(props: Optional<SaleProps, 'createdAt'>, id?: UniqueEntityId) {
        const sale = new Sale({
            ...props,
            createdAt: new Date(),
        }, id)

        return sale
    }
}