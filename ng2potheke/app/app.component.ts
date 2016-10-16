import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Hipoteca from './Models/Hipoteca'
import { ChartService } from './Services/chart.service'
import { MathService } from './Services/math.service'

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
            <hypo-form [hipoteca]="hipoteca"
              (onChangeCapital)="onChange('capital',$event)"
              (onChangeAgnos)="onChange('agnos',$event)"
              (onChangeInteres)="onChange('interes',$event)"></hypo-form>
            <amortization-table [tablaAmortizacion]=hipoteca.tablaAmortizacion></amortization-table>`,
  providers: [ChartService, MathService]
})
export class AppComponent implements OnInit { 

  hipoteca : Hipoteca;

  constructor(
    private chartService: ChartService,
    private mathService: MathService
  ) { }

  ngOnInit(): void {
    this.hipoteca = this.getInitialHipoteca();
    this.updateTabla();
  }

  updateTabla() {
    this.hipoteca.tablaAmortizacion = this.mathService.calculateAmortizationTable(this.hipoteca);
    this.chartService.updateCharts(this.hipoteca.tablaAmortizacion);
  }

  onChange(prop, e) {
    this.hipoteca[prop] = e;
    this.updateTabla();
  }

  getInitialHipoteca() : Hipoteca {
    return {
      capital: 200000,
      agnos: 40,
      interes: 2.5,
      tablaAmortizacion: []
    }
  }

}
