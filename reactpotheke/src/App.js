import React, { Component } from 'react';
import updateCharts from './common/charts';
import * as hypoMath from './common/mathServiceModule';
import AmortizationTable from './AmortizationTable'
import HipoForm from './HipoForm'


class App extends Component {

  constructor() {
    super();
    this.state = this.getMyInitialState();
    let data = hypoMath.calculateAmortizationTable(this.state);
    updateCharts(data);
  }

  componentWillMount() {
    this.updateState(this.state)
  }

  updateState(newSt) {
    let data = hypoMath.calculateAmortizationTable(newSt);
    updateCharts(data);
    this.setState(Object.assign(
      newSt,
      {
        tablaAmortizacion : data,
        cuota: Math.round(hypoMath.calculateCuota(newSt)*100)/100
      }
    ));
  }

  getMyInitialState() {
    return {
      n : 30,
      i : 2,
      C : 150000
    }
  }

  updateHypotheke(property,{target : {value: v}}) {
    let st = Object.assign(
      this.state,
      {[property]: v}
    )
    this.updateState(st);
  }

  getInteresTotal() {
    let t = this.state.tablaAmortizacion;
    return Math.round(t[t.length-1].interesTotal*100/100);
  }

  render() {
    return (
      <div className="container-fluid">
        <HipoForm cuota={this.state.cuota} interes={this.state.i} capital={this.state.C}
          agnos={this.state.n} interesTotal={this.getInteresTotal()} 
          onChangeCapital={this.updateHypotheke.bind(this, "C")}
          onChangeAgnos={this.updateHypotheke.bind(this, "n")} 
          onChangeInteres={this.updateHypotheke.bind(this, "i")} />
        <AmortizationTable tablaAmortizacion={this.state.tablaAmortizacion} />
      </div>
    );
  }
}

export default App;
