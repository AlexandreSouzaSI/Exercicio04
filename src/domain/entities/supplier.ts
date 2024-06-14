import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface SupplierProps {
    name: string
    cnpj: string
    createdAt: Date
    updatedAt?: Date
}

export class Supplier extends Entity<SupplierProps> {

    get name() {
        return this.props.name
    }

    get cnpj() {
        return this.props.cnpj
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

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    set cnpj(cnpj: string) {
        this.props.cnpj = cnpj
        this.touch()
    }

    static create(props: Optional<SupplierProps, 'createdAt'>, id?: UniqueEntityId) {
        const supplier = new Supplier({
            ...props,
            createdAt: new Date(),
        }, id)

        return supplier
    }
}