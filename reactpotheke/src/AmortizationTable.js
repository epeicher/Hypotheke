import React from 'react'
import formatNum from './services/formatter'

const AmortizationTable = (props) => (
    <table className="table table-condensed table-striped">
        <thead>
        <tr>
            <th>Periodo</th>
            <th>Capital Periodo</th>
            <th>Interes Periodo</th>
            <th>Interes Total</th>
            <th>Capital Total</th>
        </tr>
        </thead>
        <tbody>
        {props.tablaAmortizacion.map(item => (
            <tr key={item.periodo}>
                <td>{item.periodo}</td>
                <td>{formatNum(item.capitalPeriodo)}</td>
                <td>{formatNum(item.interesPeriodo)}</td>
                <td>{formatNum(item.interesTotal)}</td>
                <td>{formatNum(item.capitalTotal)}</td>
            </tr>
        ))}
        </tbody>
    </table>
)

export default AmortizationTable