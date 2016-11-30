const template = `
    <div class="row">
      <div class="col-md-7">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="iCapital" class="col-sm-3 control-label">Capital</label>
            <div class="col-sm-4">
              <input type="number" step="10000" class="form-control" id="iCapital" placeholder="Capital" 
                value="{{hipoteca.Capital}}" (change)="onChangeInner('Capital',$event)" >            
            </div>
          </div>
          <div class="form-group">
            <label for="iPeriodos" class="col-sm-3 control-label">Years</label>
            <div class="col-sm-4">
              <input type="number" class="form-control" id="iPeriodos" placeholder="Numero de años" 
                value="{{hipoteca.Years}}" (change)="onChangeInner('Years',$event)">
            </div>
          </div>
          <div class="form-group">
            <label for="rangeInterest" class="col-sm-3 control-label">Interest Rate: </label>     
            <div class="col-sm-3">      
              <input id="rangeInterest" type="range" name="interest" min="0.5" max="7" 
                value="{{hipoteca.InterestRate}}" step="0.1" class="rangeInterest" (change)="onChangeInner('InterestRate',$event)" />
            </div>
            <label id="interestRate" class="col-sm-1 control-label">{{hipoteca.InterestRate}}</label>
          </div>
          <div class="form-group">
            <label for="totalInterestPaid" class="col-sm-3 control-label">Total Interests paid:</label>                
              <label id="totalInterestPaid" class="col-sm-4 control-label">{{hipoteca.TotalInterest | number:'.0-2'}}</label>            
          </div>
          <div class="form-group">
            <label for="cuota" class="col-sm-3 control-label">Payment:</label>                
              <label id="cuota" class="col-sm-4 control-label">{{hipoteca.Payment | number:'.0-2'}}</label>            
          </div>          
        </form>
      </div>           
    </div>   
`

import { Component, EventEmitter, Input, Output } from '@angular/core';

import Hipoteca from './Models/Hipoteca'

@Component({
  selector: 'hypo-form',
  template: template
})
export class HypoForm {

    @Input()
    hipoteca: Hipoteca;

    @Output() onChange = new EventEmitter();

    onChangeInner(origin : string, e) {
      this.onChange.emit({property: origin, value: e.target.value});
    }

 }