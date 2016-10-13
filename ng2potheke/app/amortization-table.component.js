"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AmortizationTable = (function () {
    function AmortizationTable() {
        this.tablaAmortizacion = [{
                periodo: 1,
                capitalPeriodo: 200,
                interesPeriodo: 300,
                interesTotal: 200,
                capitalTotal: 300
            },
            {
                periodo: 2,
                capitalPeriodo: 210,
                interesPeriodo: 290,
                interesTotal: 490,
                capitalTotal: 510
            }];
    }
    AmortizationTable = __decorate([
        core_1.Component({
            selector: 'amortization-table',
            templateUrl: './amortizationTable.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AmortizationTable);
    return AmortizationTable;
}());
exports.AmortizationTable = AmortizationTable;
var ItemHipoteca = (function () {
    function ItemHipoteca() {
    }
    return ItemHipoteca;
}());
exports.ItemHipoteca = ItemHipoteca;
//# sourceMappingURL=amortization-table.component.js.map