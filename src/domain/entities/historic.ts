import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export interface HistoricProps {
    saleId: UniqueEntityId
    startDate: Date
    enDate: Date
}

export class Historic extends Entity<HistoricProps> {

    get saleId() {
        return this.props.saleId
    }

    get startDate() {
        return this.props.startDate
    }

    get enDate() {
        return this.props.enDate
    }

    set saleId(saleId: UniqueEntityId) {
        this.props.saleId = saleId
    }

    set startDate(startDate: Date) {
        this.props.startDate = startDate
    }

    set enDate(enDate: Date) {
        this.props.enDate = enDate
    }

    static create(props: HistoricProps, id?: UniqueEntityId) {
        const historic = new Historic({
            ...props,
        }, id)

        return historic
    }
}