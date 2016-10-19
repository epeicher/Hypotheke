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
var template = "\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <form class=\"form-horizontal\" role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"iCapital\" class=\"col-sm-3 control-label\">Capital</label>\n            <div class=\"col-sm-4\">\n              <input type=\"number\" step=\"10000\" class=\"form-control\" id=\"iCapital\" placeholder=\"Capital\" \n                ng-model=\"hipoteca.capital\" value=\"{{hipoteca.capital}}\" (change)=\"onChange('capital',$event)\" >            \n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"iPeriodos\" class=\"col-sm-3 control-label\">Years</label>\n            <div class=\"col-sm-4\">\n              <input type=\"number\" class=\"form-control\" id=\"iPeriodos\" placeholder=\"Numero de a\u00F1os\" \n                value=\"{{hipoteca.agnos}}\" ng-model=\"hipoteca.agnos\" (change)=\"onChange('agnos',$event)\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"rangeInterest\" class=\"col-sm-3 control-label\">Interest Rate: </label>     \n            <div class=\"col-sm-3\">      \n              <input id=\"rangeInterest\" type=\"range\" name=\"interest\" min=\"0.5\" max=\"7\" ng-model=\"hipoteca.interes\" \n                value=\"{{hipoteca.interes}}\" step=\"0.1\" class=\"rangeInterest\" (change)=\"onChange('interes',$event)\" />\n            </div>\n            <label id=\"interestRate\" class=\"col-sm-1 control-label\">{{hipoteca.interes}}</label>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"totalInterestPaid\" class=\"col-sm-3 control-label\">Total Interests paid:</label>                \n              <label id=\"totalInterestPaid\" class=\"col-sm-4 control-label\">{{hipoteca.totalInteres | number:'.0-2'}}</label>            \n          </div>\n          <div class=\"form-group\">\n            <label for=\"cuota\" class=\"col-sm-3 control-label\">Payment:</label>                \n              <label id=\"cuota\" class=\"col-sm-4 control-label\">{{hipoteca.cuota | number:'.0-2'}}</label>            \n          </div>          \n        </form>\n      </div>           \n    </div>   \n";
var core_1 = require('@angular/core');
var Hipoteca_1 = require('./Models/Hipoteca');
var HypoForm = (function () {
    function HypoForm() {
        this.onChangeCapital = new core_1.EventEmitter();
        this.onChangeAgnos = new core_1.EventEmitter();
        this.onChangeInteres = new core_1.EventEmitter();
    }
    HypoForm.prototype.onChange = function (origin, e) {
        switch (origin) {
            case 'capital':
                this.onChangeCapital.emit(e.target.value);
                break;
            case 'agnos':
                this.onChangeAgnos.emit(e.target.value);
                break;
            case 'interes':
                this.onChangeInteres.emit(e.target.value);
                break;
            default:
                console.error('Incorrect origin of event');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Hipoteca_1.default)
    ], HypoForm.prototype, "hipoteca", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HypoForm.prototype, "onChangeCapital", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HypoForm.prototype, "onChangeAgnos", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HypoForm.prototype, "onChangeInteres", void 0);
    HypoForm = __decorate([
        core_1.Component({
            selector: 'hypo-form',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], HypoForm);
    return HypoForm;
}());
exports.HypoForm = HypoForm;
//# sourceMappingURL=hypo-form.component.js.map