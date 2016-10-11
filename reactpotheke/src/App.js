import React, { Component } from 'react';
import chartService from './common/charts';
import hypoMath from './common/mathServiceModule';



class App extends Component {

  constructor() {
    super();
    this.state = this.getMyInitialState();
    let data = hypoMath.calculateAmortizationTable(this.state);
    chartService().updateCharts(data);
  }

  getMyInitialState() {
    return {
      n : 30,
      i : 2,
      C : 150000,
      getAnnos: function() { return this.n * 12 },
      getInterest: function () { return this.i / 1200},
      getCuota : () => { 
        var c = hypoMath.calculateCuota(this);
        return Math.round(c*100)/100;
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
      </div>
    );
  }
}

export default App;
