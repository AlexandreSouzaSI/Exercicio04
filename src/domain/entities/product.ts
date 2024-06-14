import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface ProductProps {
    name: string
    size: string
    color: string
    price: number
    createdAt: Date
    updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
    static id: string;

    get name() {
        return this.props.name
    }

    get size() {
        return this.props.size
    }

    get color() {
        return this.props.color
    }

    get price() {
        return this.props.price
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

    set price(price: number) {
        this.props.price = price
        this.touch()
    }

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    set size(size: string) {
        this.props.size = size
        this.touch()
    }

    set color(color: string) {
        this.props.color = color
        this.touch()
    }

    static create(props: Optional<ProductProps, 'createdAt'>, id?: UniqueEntityId) {
        const product = new Product({
            ...props,
            createdAt: new Date(),
        }, id)

        return product
    }
}