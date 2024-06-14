import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface StockProps {
    produtoId?: UniqueEntityId
    minimumStockQuantity: number
    stockQuantity: number
    createdAt: Date
    updatedAt?: Date
}

export class Stock extends Entity<StockProps> {

    get produtoId() {
        return this.props.produtoId
    }

    get minimumStockQuantity() {
        return this.props.minimumStockQuantity
    }

    get stockQuantity() {
        return this.props.stockQuantity
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

    set minimumStockQuantity(minimumStockQuantity: number) {
        this.props.minimumStockQuantity = minimumStockQuantity
        this.touch()
    }

    set stockQuantity(stockQuantity: number) {
        this.props.stockQuantity = stockQuantity
        this.touch()
    }


    static create(props: Optional<StockProps, 'createdAt'>, id?: UniqueEntityId) {
        const stock = new Stock({
            ...props,
            createdAt: new Date(),
        }, id)

        return stock
    }
}