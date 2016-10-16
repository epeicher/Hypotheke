const template = `
    <div class="row">
      <div class="col-md-7">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="iCapital" class="col-sm-3 control-label">Capital</label>
            <div class="col-sm-4">
              <input type="number" step="10000" class="form-control" id="iCapital" placeholder="Capital" 
                ng-model="hipoteca.capital" value="{{hipoteca.capital}}" (change)="onChange('capital',$event)" >            
            </div>
          </div>
          <div class="form-group">
            <label for="iPeriodos" class="col-sm-3 control-label">Years</label>
            <div class="col-sm-4">
              <input type="number" class="form-control" id="iPeriodos" placeholder="Numero de años" 
                value="{{hipoteca.agnos}}" ng-model="hipoteca.agnos" (change)="onChange('agnos',$event)">
            </div>
          </div>
          <div class="form-group">
            <label for="rangeInterest" class="col-sm-3 control-label">Interest Rate: </label>     
            <div class="col-sm-3">      
              <input id="rangeInterest" type="range" name="interest" min="0.5" max="7" ng-model="hipoteca.interes" 
                value="{{hipoteca.interes}}" step="0.1" class="rangeInterest" (change)="onChange('interes',$event)" />
            </div>
            <label id="interestRate" class="col-sm-1 control-label">{{hipoteca.interes}}</label>
          </div>
          <div class="form-group">
            <label for="totalInterestPaid" class="col-sm-3 control-label">Total Interests paid:</label>                
              <label id="totalInterestPaid" class="col-sm-4 control-label"></label>            
          </div>
          <div class="form-group">
            <label for="cuota" class="col-sm-3 control-label">Payment:</label>                
              <label id="cuota" class="col-sm-4 control-label">{{hipoteca.capital}}</label>            
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

    @Output() onChangeCapital = new EventEmitter<number>();
    @Output() onChangeAgnos = new EventEmitter<number>();
    @Output() onChangeInteres = new EventEmitter<number>();

    onChange(origin, e) {
      switch(origin) {
        case 'capital':
          this.onChangeCapital.emit(e.target.value)
          break;
        case 'agnos':
          this.onChangeAgnos.emit(e.target.value)
          break;
        case 'interes':
          this.onChangeInteres.emit(e.target.value)
          break;
        default:
          console.error('Incorrect origin of event');
      }
    }

 }