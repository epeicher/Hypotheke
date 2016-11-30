export default class Hipoteca {
    Capital: number;
    Years: number;
    InterestRate: number;
    Payment: number;
    AmortizationTable: ItemHipoteca[];

    constructor() {
        this.Capital = 150000;
        this.Years = 30;
        this.InterestRate = 2.0;
    }

    get TotalInterest() {
        let t = this.AmortizationTable;
        return t.length === 0 ? 0 : t[t.length - 1].interesTotal
    }
}

export class ItemHipoteca {
    periodo : number;
    capitalPeriodo : number;
    interesPeriodo : number;
    interesTotal : number;
    capitalTotal : number;
}