import React, { Component } from 'react';
import updateCharts from './services/charts';
import * as hypoMath from './services/mathServiceModule';
import AmortizationTable from './AmortizationTable'
import ComparisonTable from './ComparisonTable'
import HipoForm from './HipoForm'
import validate from './services/validate'


class App extends Component {

  constructor() {
    super();
    let initState = {
      n : 30,
      i : 2,
      C : 150000
    }
    let data = hypoMath.calculateAmortizationTable(initState);
    this.state = {
      ...initState,
      tablaAmortizacion: data
    }
    updateCharts(data);
  }

  updateState(newSt) {
    let data = hypoMath.calculateAmortizationTable(newSt);
    let cuota = data.length === 0 ? 0 : hypoMath.calculateCuota(newSt);
    updateCharts(data);
    this.setState(
      { ...newSt,
        tablaAmortizacion : data,
        cuota
      });
  }

  updateHypotheke(property,{target : {value: v}}) {
    let st = {};
    if(!v) {
      st = { ...this.state, [property]:0 }
    } else if(validate(property,v)) {
      st = {...this.state, [property]: v }
    }
    this.updateState(st);
  }

  getInteresTotal() {
    let t = this.state.tablaAmortizacion;
    if(t.length === 0) return 0;
    return t[t.length-1].interesTotal;
  }

  updateTable(periodo,remainingCapital) {
    let remainingAgnos = this.state.n - periodo/12;


    let initState = {
      n : remainingAgnos,
      i : this.state.i,
      C : remainingCapital
    }
    let restTable = hypoMath.calculateAmortizationTable(initState);
    let newPeriodos = restTable.map(r => { return {...r, periodo:r.periodo+periodo}});
    let initTablaAmort = this.state.tablaAmortizacion.slice(0,periodo);
    initTablaAmort[initTablaAmort.length-1].capitalPendiente = remainingCapital;
    let finalTable = [...initTablaAmort,...newPeriodos];
    updateCharts(finalTable);
    let newSt = {...this.state, tablaAmortizacion:finalTable, editPeriod:-1}

    this.setState(newSt);
  }

  onCompare(t1, t2) {
    let iTotal = 0;
    let diferenciaAnual = 0;
    let year = 0;
    let comparisonTable = []; 
    for(let idxTarget = 0; idxTarget < t2.length; idxTarget++) {
      let target = t2[idxTarget];
      let diffPeriodo = t1[idxTarget].interesPeriodo - target.interesPeriodo 
      iTotal += diffPeriodo;
      if((idxTarget + 1)%12 === 0) {
        year = parseInt((idxTarget+1)/12,10);
        diferenciaAnual = iTotal - comparisonTable[((year-1)*12)+1].diferenciaAcumulada;
      } else {
        diferenciaAnual = 0
      }
      comparisonTable.push({
        periodo: idxTarget+1,
        diffInteresPeriodo: diffPeriodo, 
        diferenciaAcumulada: iTotal,
        diferenciaAnual
      });
    }
    this.setState({...this.state, showComparison: true, comparisonTable});
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Datos de la Hipoteca</h1>
        <HipoForm cuota={this.state.cuota} interes={this.state.i} capital={this.state.C}
          agnos={this.state.n} interesTotal={this.getInteresTotal()} 
          onChangeCapital={this.updateHypotheke.bind(this, "C")}
          onChangeAgnos={this.updateHypotheke.bind(this, "n")} 
          onChangeInteres={this.updateHypotheke.bind(this, "i")} />

        {this.state.showComparison ? <ComparisonTable comparisonTable={this.state.comparisonTable} /> : null}

        <AmortizationTable tablaAmortizacion={this.state.tablaAmortizacion} 
           updateTable={(e,v)=> this.updateTable(e,v)}
           updateRow={p => this.setState({...this.state, editPeriod:p})}
           editPeriod={this.state.editPeriod}
           onCompare={(t1,t2) => this.onCompare(t1, t2)} />
      </div>
    );
  }
}

export default App;
