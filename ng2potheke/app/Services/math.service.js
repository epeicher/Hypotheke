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
var MathService = (function () {
    function MathService() {
    }
    MathService.prototype.calculateAmortizationTable = function (h) {
        var n = getAnnos(h);
        var i = getInterest(h);
        var c = this.calculateCuota(h);
        var k = h.capital;
        var _a = [0, 0, 0, 0, 0, 0], j = _a[0], kp = _a[1], ip = _a[2], kt = _a[3], it = _a[4], d = _a[5];
        var tabla = [];
        while (n > 0) {
            n -= 1;
            j += 1;
            if (n > 0) {
                kp = c - i * k;
                ip = i * k;
                kt += kp;
                it += ip;
                d = (1 + i) * k - c;
                AddToTabla(tabla, j, kp, ip, kt, it);
            }
            else {
                AddToTabla(tabla, j, k, i * k, kt, it);
            }
            k = d;
        }
        return tabla;
    };
    MathService.prototype.calculateCuota = function (h) {
        return (h.capital * getInterest(h) / (1 - Math.pow(1 + getInterest(h), -1 * getAnnos(h))));
    };
    MathService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MathService);
    return MathService;
}());
exports.MathService = MathService;
function getInterest(h) {
    return h.interes / 1200;
}
function getAnnos(h) {
    return h.agnos * 12;
}
function AddToTabla(h, j, k, i, kt, it) {
    h.push({
        periodo: j,
        capitalPeriodo: k,
        interesPeriodo: i,
        capitalTotal: kt,
        interesTotal: it
    });
}
//# sourceMappingURL=math.service.js.map