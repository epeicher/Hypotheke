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
var chart_service_1 = require('./Services/chart.service');
var math_service_1 = require('./Services/math.service');
var AppComponent = (function () {
    function AppComponent(chartService, mathService) {
        this.chartService = chartService;
        this.mathService = mathService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.hipoteca = this.getInitialHipoteca();
        this.updateTabla();
    };
    AppComponent.prototype.updateTabla = function () {
        this.hipoteca.tablaAmortizacion = this.mathService.calculateAmortizationTable(this.hipoteca);
        this.chartService.updateCharts(this.hipoteca.tablaAmortizacion);
    };
    AppComponent.prototype.onChange = function (prop, e) {
        this.hipoteca[prop] = e;
        console.log('changed', prop);
        console.log(this.hipoteca[prop]);
        this.updateTabla();
    };
    AppComponent.prototype.getInitialHipoteca = function () {
        return {
            capital: 200000,
            agnos: 40,
            interes: 2.5,
            tablaAmortizacion: []
        };
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular App</h1>\n            <hypo-form [hipoteca]=\"hipoteca\"\n              (onChangeCapital)=\"onChange('capital',$event)\"\n              (onChangeAgnos)=\"onChange('agnos',$event)\"\n              (onChangeInteres)=\"onChange('interes',$event)\"></hypo-form>\n            <amortization-table [tablaAmortizacion]=hipoteca.tablaAmortizacion></amortization-table>",
            providers: [chart_service_1.ChartService, math_service_1.MathService]
        }), 
        __metadata('design:paramtypes', [chart_service_1.ChartService, math_service_1.MathService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map