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
        this.hypos = [];
    }

    capitalRow(row, item) {
        if(row !== item.periodo) {            
            return (<td
                onDoubleClick={(e) => this.props.updateRow(item.periodo)}>
                {formatNum(item.capitalPendiente)}</td>);
        }

        return (<td><input defaultValue={item.capitalPendiente} 
                onBlur={(e) => this.props.updateTable(row, e.target.value)} /></td>)
    }

    saveHypo() {
        this.hypos.push(this.props.tablaAmortizacion);
        console.log(this.hypos)
    }

    render() {
        let {tablaAmortizacion, editPeriod} = this.props;

        return (
            <div>
            <button onClick={this.saveHypo.bind(this)}>Save it for later comparison</button>
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
                        
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
    }
}

export default AmortizationTable