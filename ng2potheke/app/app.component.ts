import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Hipoteca from './Models/Hipoteca'
import { ChartService } from './Services/chart.service'
import { MathService } from './Services/math.service'

@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
              <h1>Datos de la Hipoteca</h1>
              <hypo-form [hipoteca]="hipoteca" (onChange)="onChange($event)">
              </hypo-form>
              <amortization-table [tablaAmortizacion]=hipoteca.AmortizationTable></amortization-table>
             </div>`,
  providers: [ChartService, MathService]
})
export class AppComponent implements OnInit { 

  hipoteca : Hipoteca;

  constructor(
    private chartService: ChartService,
    private mathService: MathService
  ) { }

  ngOnInit(): void {
    this.hipoteca = new Hipoteca();
    this.updateTabla();
  }

  updateTabla() {
    this.hipoteca.Payment = this.mathService.calculateCuota(this.hipoteca);
    let tblAmort = this.mathService.calculateAmortizationTable(this.hipoteca);
    this.hipoteca.AmortizationTable = tblAmort;
    this.chartService.updateCharts(tblAmort);
  }

  onChange({property, value}) {
    this.hipoteca[property] = value;
    this.updateTabla();
  }

}
