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
var core_1 = require("@angular/core");
var Hipoteca_1 = require("./Models/Hipoteca");
var chart_service_1 = require("./Services/chart.service");
var math_service_1 = require("./Services/math.service");
var AppComponent = (function () {
    function AppComponent(chartService, mathService) {
        this.chartService = chartService;
        this.mathService = mathService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.hipoteca = new Hipoteca_1.default();
        this.updateTabla();
    };
    AppComponent.prototype.updateTabla = function () {
        this.hipoteca.Payment = this.mathService.calculateCuota(this.hipoteca);
        var tblAmort = this.mathService.calculateAmortizationTable(this.hipoteca);
        this.hipoteca.AmortizationTable = tblAmort;
        this.chartService.updateCharts(tblAmort);
    };
    AppComponent.prototype.onChange = function (_a) {
        var property = _a.property, value = _a.value;
        this.hipoteca[property] = value;
        this.updateTabla();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container-fluid\">\n              <h1>Datos de la Hipoteca</h1>\n              <hypo-form [hipoteca]=\"hipoteca\" (onChange)=\"onChange($event)\">\n              </hypo-form>\n              <amortization-table [tablaAmortizacion]=hipoteca.AmortizationTable></amortization-table>\n             </div>",
        providers: [chart_service_1.ChartService, math_service_1.MathService]
    }),
    __metadata("design:paramtypes", [chart_service_1.ChartService,
        math_service_1.MathService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map