"use strict";
var Hipoteca = (function () {
    function Hipoteca() {
        this.Capital = 150000;
        this.Years = 30;
        this.InterestRate = 2.0;
    }
    Object.defineProperty(Hipoteca.prototype, "TotalInterest", {
        get: function () {
            var t = this.AmortizationTable;
            return t.length === 0 ? 0 : t[t.length - 1].interesTotal;
        },
        enumerable: true,
        configurable: true
    });
    return Hipoteca;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hipoteca;
var ItemHipoteca = (function () {
    function ItemHipoteca() {
    }
    return ItemHipoteca;
}());
exports.ItemHipoteca = ItemHipoteca;
//# sourceMappingURL=Hipoteca.js.map