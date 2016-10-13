import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AmortizationTable } from './amortization-table.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AmortizationTable ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
