export default class HipoModel {
    constructor() {
        this.Capital = 150000;
        this.Years = 30;
        this.InterestRate = 2.0;
        this.AmortizationTable = [];             
    }

    getTotalInterest = () => {
        let t = this.AmortizationTable;
        if(t.length === 0) return 0;
        return t[t.length-1].interesTotal;
    }
}