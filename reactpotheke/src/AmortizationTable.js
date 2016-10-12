import React from 'react'

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
                <td>{item.capitalPeriodo}</td>
                <td>{item.interesPeriodo}</td>
                <td>{item.interesTotal}</td>
                <td>{item.capitalTotal}</td>
            </tr>
        ))}
        </tbody>
    </table>
)

export default AmortizationTable