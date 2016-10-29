import React from 'react'

export default (props) => (
     <table className="table table-condensed table-striped">
                <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Interes</th>
                    <th>Interes Acumulado</th>
                    <th>Interes Acumulado Anual</th>
                </tr>
                </thead>
                <tbody>
                {props.comparisonTable.map(item => (
                    <tr key={item.periodo}>
                        <td>{item.periodo}</td>
                        <td>{item.diffInteresPeriodo}</td>
                        <td>{item.diferenciaAcumulada}</td>
                        <td>{item.diferenciaAnual}</td>
                    </tr>
                ))}
                </tbody>
            </table>
)