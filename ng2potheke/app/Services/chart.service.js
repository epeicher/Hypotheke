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
var ChartService = (function () {
    function ChartService() {
        var data = {};
        var self = this;
        var margin = { top: 20, right: 30, bottom: 30, left: 70 }, browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, width = browserWidth - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        this.x = d3.scale.linear()
            .range([0, (width - 2 * margin.right - margin.left) / 2]);
        this.y = d3.scale.linear()
            .range([height, 0]);
        this.yTotal = d3.scale.linear()
            .range([height, 0]);
        this.xAxis = d3.svg.axis()
            .scale(this.x)
            .orient("bottom");
        this.yAxis = d3.svg.axis()
            .scale(this.y)
            .orient("left");
        this.yAxisTotal = d3.svg.axis()
            .scale(this.yTotal)
            .orient("left");
        this.lineCapital = d3.svg.line()
            .x(function (d) { return self.x(d.periodo); })
            .y(function (d) { return self.y(d.capitalPeriodo); });
        this.lineInteres = d3.svg.line()
            .x(function (d) { return self.x(d.periodo); })
            .y(function (d) { return self.y(d.interesPeriodo); });
        this.lineCapitalTotal = d3.svg.line()
            .x(function (d) { return self.x(d.periodo); })
            .y(function (d) { return self.yTotal(d.capitalTotal); });
        this.lineInteresTotal = d3.svg.line()
            .x(function (d) { return self.x(d.periodo); })
            .y(function (d) { return self.yTotal(d.interesTotal); });
        var globalSvg = d3.select("#containerSvg")
            .append("svg")
            .attr("width", width + margin.right)
            .attr("height", height + margin.top + margin.bottom);
        var svgPeriodo = globalSvg
            .append("g")
            .attr("id", "porPeriodo")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var svgAcumulado = globalSvg
            .append("g")
            .attr("id", "total")
            .attr("transform", "translate(" + (+width / 2 + 2 * margin.right) + "," + margin.top + ")");
        svgPeriodo.append("g")
            .attr("id", "xAxis")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(this.xAxis);
        svgPeriodo.append("g")
            .attr("id", "yAxis")
            .attr("class", "y axis")
            .call(this.yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("€ Periodo");
        svgAcumulado.append("g")
            .attr("id", "xAxisTotal")
            .attr("class", "x axis")
            .attr("transform", "translate(" + 0 + "," + height + ")")
            .call(this.xAxis);
        svgAcumulado.append("g")
            .attr("class", "y axis")
            .attr("id", "yAxisTotal")
            .call(this.yAxisTotal)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("€ Totales");
        svgPeriodo.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", this.lineCapital);
        svgPeriodo.append("path")
            .datum(data)
            .attr("class", "line2")
            .attr("d", this.lineInteres);
        svgAcumulado.append("path")
            .datum(data)
            .attr("class", "line3")
            .attr("d", this.lineCapitalTotal);
        svgAcumulado.append("path")
            .datum(data)
            .attr("class", "line4")
            .attr("d", this.lineInteresTotal);
    }
    ChartService.prototype.updateCharts = function (data) {
        this.x.domain(d3.extent(data, function (d) { return d.periodo; }));
        this.y.domain([0, d3.max(data, function (d) { return Math.max(d.capitalPeriodo, d.interesPeriodo); })]);
        this.yTotal.domain([0, d3.max(data, function (d) { return Math.max(d.capitalTotal, d.interesTotal); })]);
        d3.select("#xAxis").call(this.xAxis);
        d3.select("#xAxisTotal").call(this.xAxis);
        d3.select("#yAxis").call(this.yAxis);
        d3.select("#yAxisTotal").call(this.yAxisTotal);
        d3.select(".line")
            .datum(data)
            .attr("d", this.lineCapital);
        d3.select(".line2")
            .datum(data)
            .attr("d", this.lineInteres);
        d3.select(".line3")
            .datum(data)
            .attr("d", this.lineCapitalTotal);
        d3.select(".line4")
            .datum(data)
            .attr("d", this.lineInteresTotal);
    };
    ;
    ChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map