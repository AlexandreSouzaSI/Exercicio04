import { SaleRepository } from "../repositories/sale-repository"

interface EditSaleUseCaseRequest {
    saleId: string
    quantity: number
    price: number
    totalPrice: number
}

export class EditSaleUseCase {
    constructor(
        private saleRepository: SaleRepository
    ) {}

    async execute({
        saleId,
        quantity,
        price,
        totalPrice
    }: EditSaleUseCaseRequest) {
        const sale = await this.saleRepository.findById(saleId)

        if(!sale) {
            return null
        }

        sale.price = price
        sale.quantity = quantity
        sale.totalPrice = totalPrice

        await this.saleRepository.save(sale)

        return sale
    }
}