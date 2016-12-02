import React, { Component } from 'react'
import * as d3 from "d3";


export default class HipoCharts extends Component {

    componentDidMount() {
        this.initChart();
        this.updateCharts(this.props.data);
    }

    componentDidUpdate(){
        this.updateCharts(this.props.data);
    }

    render() {        
        return (<div id="containerSvg"></div>);
    }

    updateCharts = (data) => {
        
        this.x.domain(d3.extent(data, d => d.periodo));
        this.y.domain([0, d3.max(data, d => Math.max(d.capitalPeriodo, d.interesPeriodo))]);
        this.yTotal.domain([0, d3.max(data, d => Math.max(d.capitalTotal, d.interesTotal))]);

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
    }


    initChart = () => {

        var data = {};

        var margin = { top: 20, right: 60, bottom: 30, left: 60 },
            browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            width = browserWidth,
            height = 500;

        this.x = d3.scale.linear()
            .range([0, (width - margin.left - margin.right) / 2]);

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
            .x((d) => this.x(d.periodo))
            .y((d) => this.y(d.capitalPeriodo));

        this.lineInteres = d3.svg.line()
            .x((d) => this.x(d.periodo))
            .y((d) => this.y(d.interesPeriodo));

        this.lineCapitalTotal = d3.svg.line()
            .x((d) => this.x(d.periodo))
            .y((d) => this.yTotal(d.capitalTotal));

        this.lineInteresTotal = d3.svg.line()
            .x((d) => this.x(d.periodo))
            .y((d) => this.yTotal(d.interesTotal));

        var globalSvg = d3.select("#containerSvg")
            .append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .call(responsivefy);

        var svgPeriodo = globalSvg
            .append("g")
            .attr("id", "porPeriodo")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var svgAcumulado = globalSvg
            .append("g")
            .attr("id", "total")
            .attr("transform", "translate(" + (width / 2 + margin.left + margin.right) + "," + margin.top + ")");

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
}

function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width"), 10),
        height = parseInt(svg.style("height"), 10),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"), 10);
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}