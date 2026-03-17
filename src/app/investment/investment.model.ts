export interface Investment{
    initialInvestment: number
    annualInvestment: number
    duration: number
    expectedReturn: number
}

export interface InvestmentResult{
    year: number,
    valueEndOfYear: number,
    interest: number,
    totalInterest: number,
    totalAmountInvested: number
}