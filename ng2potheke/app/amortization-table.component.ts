import { Component } from '@angular/core';

@Component({
  selector: 'amortization-table',
  templateUrl: './amortizationTable.html'
})
export class AmortizationTable { 
    tablaAmortizacion : ItemHipoteca[] = [{
        periodo:1,
        capitalPeriodo: 200,
        interesPeriodo: 300,
        interesTotal: 200,
        capitalTotal: 300
    },
    {
        periodo: 2,
        capitalPeriodo: 210,
        interesPeriodo: 290,
        interesTotal: 490,
        capitalTotal: 510
    }]
}

export class ItemHipoteca {
    periodo : number;
    capitalPeriodo : number;
    interesPeriodo : number;
    interesTotal : number;
    capitalTotal : number;
}