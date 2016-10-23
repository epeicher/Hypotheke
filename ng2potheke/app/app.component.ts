import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Hipoteca from './Models/Hipoteca'
import { ChartService } from './Services/chart.service'
import { MathService } from './Services/math.service'

@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
              <h1>Datos de la Hipoteca</h1>
              <hypo-form [hipoteca]="hipoteca"
                (onChangeCapital)="onChange('capital',$event)"
                (onChangeAgnos)="onChange('agnos',$event)"
                (onChangeInteres)="onChange('interes',$event)"></hypo-form>
              <amortization-table [tablaAmortizacion]=hipoteca.tablaAmortizacion></amortization-table>
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
    this.hipoteca = this.getInitialHipoteca();
    this.updateTabla();
  }

  updateTabla() {
    this.hipoteca.cuota = this.mathService.calculateCuota(this.hipoteca);
    let tblAmort = this.mathService.calculateAmortizationTable(this.hipoteca);
    this.hipoteca.tablaAmortizacion = tblAmort;
    this.hipoteca.totalInteres = tblAmort[tblAmort.length - 1].interesTotal;
    this.chartService.updateCharts(tblAmort);
  }

  onChange(prop, e) {
    this.hipoteca[prop] = e;
    this.updateTabla();
  }

  getInitialHipoteca() : Hipoteca {
    var h = {
      capital: 200000,
      agnos: 40,
      interes: 2.5,
      cuota: 0,
      totalInteres: 0,
      tablaAmortizacion: []
    }
    h.cuota = this.mathService.calculateCuota(h);
    return h;
  }

}