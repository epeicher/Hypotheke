import React, { Component } from 'react'
import formatNum from './services/formatter'

class AmortizationTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editPeriod: -1,
            capital: this.props.capitalPendiente
        }
    }

    capitalRow(row, item) {
        if(row !== item.periodo) return (<td>{formatNum(item.capitalPendiente)}</td>);

        return (<td><input value={this.state.capital} 
                onChange={(e) => this.updateRow(row, e.target.value)} /></td>)
    }

    updateRow(row,value) {
        this.setState({editPeriod:row, capital:value});
    }

    render() {
        let {tablaAmortizacion, editItem} = this.props;

        return (
            <table className="table table-condensed table-striped">
                <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Capital Periodo</th>
                    <th>Interes Periodo</th>
                    <th>Interes Total</th>
                    <th>Capital Total</th>
                    <th>Capital Pendiente</th>
                </tr>
                </thead>
                <tbody>
                {tablaAmortizacion.map(item => (
                    <tr key={item.periodo}>
                        <td>{item.periodo}</td>
                        <td>{formatNum(item.capitalPeriodo)}</td>
                        <td>{formatNum(item.interesPeriodo)}</td>
                        <td>{formatNum(item.interesTotal)}</td>
                        <td>{formatNum(item.capitalTotal)}</td>
                        {this.capitalRow(this.state.editPeriod,item)}
                        <td><button onClick={(e) => this.updateRow(item.periodo, item.capitalPendiente)}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default AmortizationTable