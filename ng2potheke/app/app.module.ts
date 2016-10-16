import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AmortizationTable } from './amortization-table.component'
import { HypoForm } from './hypo-form.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AmortizationTable, HypoForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
