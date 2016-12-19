import React from 'react'
import formatNum from './services/formatter'

export default (props) => {
  
    let {Payment, Years, Capital, InterestRate, getTotalInterest, onChangeForm} = props;

    return (
    <div className="row">
      <h1>Datos de la Hipoteca</h1>
      <div className="col-md-7">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="iCapital" className="col-sm-3 control-label">Capital</label>
            <div className="col-sm-4">
              <input type="number" step="10000" className="form-control" id="iCapital" placeholder="Capital" 
                value={Capital} onChange={(e) => onChangeForm("Capital",e)} min="1" max="1000000000" />            
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="iPeriodos" className="col-sm-3 control-label">Years</label>
            <div className="col-sm-4">
              <input type="number" className="form-control" id="iPeriodos" placeholder="Numero de años" 
                value={Years} onChange={(e) => onChangeForm("Years",e)} min="1" max="100" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rangeInterest" className="col-sm-3 control-label">Interest Rate: </label>     
            <div className="col-sm-3">      
              <input id="rangeInterest" type="range" name="interest" min="0.5" max="7" 
                value={InterestRate} step="0.1" className="rangeInterest" onChange={(e) => onChangeForm("InterestRate",e)} />
            </div>
            <label id="interestRate" className="col-sm-1 control-label">{InterestRate}</label>
          </div>
          <div className="form-group">
            <label htmlFor="totalInterestPaid" className="col-sm-3 control-label">Total Interests paid:</label>                
              <label id="totalInterestPaid" className="col-sm-4 control-label">{formatNum(getTotalInterest())}</label>            
          </div>
          <div className="form-group">
            <label htmlFor="Payment" className="col-sm-3 control-label">Payment:</label>                
              <label id="Payment" className="col-sm-4 control-label">{formatNum(Payment)}</label>            
          </div>          
        </form>
      </div>           
    </div>
    )   
}
