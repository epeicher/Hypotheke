import React, { Component } from 'react'
import formatNum from './services/formatter'

const styles = {
    tbody : {
        textAlign: "center"
    }
}

class AmortizationTable extends Component {

    constructor() {
        super();
        this.state = {capital:null}
    }

    capitalRow(row, item) {
        if(row !== item.periodo) return (<td>{formatNum(item.capitalPendiente)}</td>);

        return (<td><input value={this.state.capital || item.capitalPendiente} 
                onChange={e => this.setState({capital:e.target.value})}
                onBlur={e => this.rowUpdated(row, e.target.value)} /></td>)
    }

    rowUpdated(row,value){
        this.state = {capital:null};
        this.props.updateTable(row, value);
    }

    render() {
        let {tablaAmortizacion, editPeriod, updateRow} = this.props;

        return (
            <table className="table table-condensed table-striped">
                <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Interes</th>
                    <th>Cuota</th>
                    <th>Capital Periodo</th>
                    <th>Interes Periodo</th>
                    <th>Interes Total</th>
                    <th>Capital Total</th>
                    <th>Capital Pendiente</th>
                </tr>
                </thead>
                <tbody style={styles.tbody}>
                {tablaAmortizacion.map(item => (
                    <tr key={item.periodo}>
                        <td>{item.periodo}</td>
                        <td>{formatNum(item.interes)}</td>
                        <td>{formatNum(item.cuota)}</td>
                        <td>{formatNum(item.capitalPeriodo)}</td>
                        <td>{formatNum(item.interesPeriodo)}</td>
                        <td>{formatNum(item.interesTotal)}</td>
                        <td>{formatNum(item.capitalTotal)}</td>
                        {this.capitalRow(editPeriod,item)}
                        <td><button onClick={(e) => updateRow(item.periodo)}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default AmortizationTable