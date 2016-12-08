import React, { Component } from 'react';
import * as hypoMath from './services/mathServiceModule';
import AmortizationTable from './AmortizationTable'
import HipoForm from './HipoForm'
import validate from './services/validate'
import HipoModel from './HipoModel'
import HipoCharts from './HipoCharts'

class App extends Component {

  constructor() {
    super();
    this.state = {HipoModel: new HipoModel()};    
  }

  componentWillMount() {
    this.updateState(this.state)
  }

  updateState(newSt) {
    let table = hypoMath.calculateAmortizationTable(newSt.HipoModel);
    let cuota = hypoMath.calculateCuota(newSt.HipoModel);

    let newHipoModel = Object.assign(this.state.HipoModel,
      {AmortizationTable: table}, {Payment : cuota});    
    this.setState(Object.assign(this.state, {HipoModel: newHipoModel}));      
  }


  updateHypotheke(property,{target : {value: v}}) {
    let st = this.state;
    if(validate(property,v)) {
      let newHipoModel = Object.assign(st.HipoModel, {[property] : v});        
      st = Object.assign(st, {HipoModel:newHipoModel});
    }
    this.updateState(st);
  }

  render() {
    return (
      <div className="container-fluid">
        <HipoCharts data={this.state.HipoModel.AmortizationTable} />                      
        <HipoForm {...this.state.HipoModel} onChange={this.updateHypotheke.bind(this)} />
        <AmortizationTable tablaAmortizacion={this.state.HipoModel.AmortizationTable} />
      </div>
    );
  }
}

export default App;
