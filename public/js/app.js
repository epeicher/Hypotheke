(function () {

	this.app = this.app || {};
   	var ns = this.app;

	'use strict';

    function setupBindings() {
    	document.getElementById("rangeInterest").addEventListener('change', ns.changeValue, false);
    	document.getElementById("iCapital").addEventListener('change', ns.changeValue, false);
    	document.getElementById("iPeriodos").addEventListener('change', ns.changeValue, false);
    }  

	var initializeData = function () {
	    var hipoteca = ns.getHipotecaData();
	    data = MathService.calculateAmortizationTable(hipoteca); 
	    ns.updateData(data,hipoteca); 
   } 


    ns.getHipotecaData = function () {
      var interest = document.getElementById("rangeInterest").value;
      var capital = document.getElementById("iCapital").value;
      var periodos = document.getElementById("iPeriodos").value*12;
      ns.hipoteca.i = interest / 1200;
      ns.hipoteca.C = capital || ns.hipoteca.C;
      ns.hipoteca.n = periodos || ns.hipoteca.n;

      return ns.hipoteca;
    }

    setupBindings();
    initializeData();

}());