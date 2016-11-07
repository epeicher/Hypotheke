import * as d3 from "d3";

   var data = {};

   var margin = {top: 20, right: 60, bottom: 30, left: 60},
       browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
       width = browserWidth - margin.left - margin.right,
       height = 500 - margin.top - margin.bottom;

   var x = d3.scale.linear()
    .range([0, (width-margin.left-margin.right)/2]);

   var y = d3.scale.linear()
    .range([height, 0]);

   var yTotal = d3.scale.linear()
    .range([height, 0]);

   var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

   var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

   var yAxisTotal = d3.svg.axis()
    .scale(yTotal)
    .orient("left");

   var lineCapital = d3.svg.line()
    .x(function(d) { return x(d.periodo); })
    .y(function(d) { return y(d.capitalPeriodo); });

   var lineInteres = d3.svg.line()
    .x(function(d) { return x(d.periodo); })
    .y(function(d) { return y(d.interesPeriodo); });

   var lineCapitalTotal = d3.svg.line()
    .x(function(d) { return x(d.periodo); })
    .y(function(d) { return yTotal(d.capitalTotal); });

   var lineInteresTotal = d3.svg.line()
    .x(function(d) { return x(d.periodo); })
    .y(function(d) { return yTotal(d.interesTotal); });

   var globalSvg = d3.select("#containerSvg")   
    .append("svg")
    .attr("width", width+margin.right+margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .call(responsivefy);

   var svgPeriodo = globalSvg
    .append("g")
    .attr("id","porPeriodo")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
   var svgAcumulado = globalSvg
    .append("g")
    .attr("id","total")
    .attr("transform", "translate(" + ( width/2 + margin.left + margin.right) + "," + margin.top + ")");

     svgPeriodo.append("g")
      .attr("id", "xAxis")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

     svgPeriodo.append("g")
      .attr("id", "yAxis")
      .attr("class", "y axis")
      .call(yAxis)
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
      .call(xAxis);

     svgAcumulado.append("g")
      .attr("class", "y axis")
      .attr("id", "yAxisTotal")
      .call(yAxisTotal)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("€ Totales");

     svgPeriodo.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", lineCapital);

     svgPeriodo.append("path")
      .datum(data)
      .attr("class", "line2")
      .attr("d", lineInteres);


     svgAcumulado.append("path")
      .datum(data)
      .attr("class", "line3")
      .attr("d", lineCapitalTotal);

     svgAcumulado.append("path")
      .datum(data)
      .attr("class", "line4")
      .attr("d", lineInteresTotal);

export default function updateCharts (data) {
    x.domain(d3.extent(data, d => d.periodo));
    y.domain([0,d3.max(data, d => Math.max(d.capitalPeriodo, d.interesPeriodo))]);
    yTotal.domain([0,d3.max(data, d => Math.max(d.capitalTotal, d.interesTotal))]);

    d3.select("#xAxis").call(xAxis);
    d3.select("#xAxisTotal").call(xAxis);
    d3.select("#yAxis").call(yAxis);
    d3.select("#yAxisTotal").call(yAxisTotal);

    d3.select(".line")
      .datum(data)
      .attr("d",lineCapital);

    d3.select(".line2")
      .datum(data)
      .attr("d",lineInteres);

    d3.select(".line3")
      .datum(data)
      .attr("d",lineCapitalTotal);
    d3.select(".line4")
      .datum(data)
      .attr("d",lineInteresTotal);
}

function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width"),10),
        height = parseInt(svg.style("height"),10),
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
        var targetWidth = parseInt(container.style("width"),10);
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}