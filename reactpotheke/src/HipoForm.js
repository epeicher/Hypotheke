import React from 'react'

export default (props) => {
    let {cuota, agnos, capital, interes, interesTotal, onChangeCapital, onChangeAgnos, onChangeInteres} = props;
    return (
    <div className="row">
      <div className="col-md-7">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="iCapital" className="col-sm-3 control-label">Capital</label>
            <div className="col-sm-4">
              <input type="number" step="10000" className="form-control" id="iCapital" placeholder="Capital" 
                value={capital} onChange={onChangeCapital} />            
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="iPeriodos" className="col-sm-3 control-label">Years</label>
            <div className="col-sm-4">
              <input type="number" className="form-control" id="iPeriodos" placeholder="Numero de años" 
                value={agnos} onChange={onChangeAgnos} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rangeInterest" className="col-sm-3 control-label">Interest Rate: </label>     
            <div className="col-sm-3">      
              <input id="rangeInterest" type="range" name="interest" min="0.5" max="7" 
                value={interes} step="0.1" className="rangeInterest" onChange={onChangeInteres} />
            </div>
            <label id="interestRate" className="col-sm-1 control-label">{interes}</label>
          </div>
          <div className="form-group">
            <label htmlFor="totalInterestPaid" className="col-sm-3 control-label">Total Interests paid:</label>                
              <label id="totalInterestPaid" className="col-sm-4 control-label">{interesTotal}</label>            
          </div>
          <div className="form-group">
            <label htmlFor="cuota" className="col-sm-3 control-label">Payment:</label>                
              <label id="cuota" className="col-sm-4 control-label">{cuota}</label>            
          </div>          
        </form>
      </div>           
    </div>
    )   
}
