import React, { Component } from 'react';
import updateCharts from './services/charts';
import * as hypoMath from './services/mathServiceModule';
import AmortizationTable from './AmortizationTable'
import HipoForm from './HipoForm'
import validate from './services/validate'
import HipoModel from './HipoModel'


class App extends Component {

  constructor() {
    super();
    this.state = {HipoModel: new HipoModel()};
    let data = hypoMath.calculateAmortizationTable(this.state.HipoModel);
    updateCharts(data);
  }

  componentWillMount() {
    this.updateState(this.state)
  }

  updateState(newSt) {
    let data = hypoMath.calculateAmortizationTable(newSt.HipoModel);
    let cuota = data.length === 0 ? 0 : hypoMath.calculateCuota(newSt.HipoModel);
    updateCharts(data);

    let newHipoModel = Object.assign(this.state.HipoModel,
      {AmortizationTable: data}, {Payment : cuota});    
    this.setState(Object.assign(this.state, {HipoModel: newHipoModel}));      
  }


  updateHypotheke(property,{target : {value: v}}) {
    let st = {};
    if(!v) {
      let newHipoModel = Object.assign(this.state.HipoModel, {[property] : 0});        
      st = Object.assign(this.state, {HipoModel:newHipoModel});
    } else if(validate(property,v)) {
      let newHipoModel = Object.assign(this.state.HipoModel, {[property] : v});        
      st = Object.assign(this.state, {HipoModel:newHipoModel});

    }
    this.updateState(st);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Datos de la Hipoteca</h1>
        <HipoForm {...this.state.HipoModel} onChange={this.updateHypotheke.bind(this)} />
        <AmortizationTable tablaAmortizacion={this.state.HipoModel.AmortizationTable} />
      </div>
    );
  }
}

export default App;
