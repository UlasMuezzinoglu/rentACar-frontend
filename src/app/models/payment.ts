export interface Payment{
    id: number
    userId: number
    creditCardNumber: string
    expirationMonth: string
    expirationYear : string
    securityCode : string
}