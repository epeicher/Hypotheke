import { Component, Input } from '@angular/core';
import {ItemHipoteca} from './Models/Hipoteca'

@Component({
  selector: 'amortization-table',
  templateUrl: './app/amortizationTable.html'
})
export class AmortizationTable { 
    @Input()
    tablaAmortizacion : ItemHipoteca[]
}

