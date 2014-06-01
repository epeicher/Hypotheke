angular.module('app',['mathServiceModule', 'charts'])
//.service('chartsService',function(){console.log("Me he cargado");})
.controller('HypoCtrl', ['$scope','hypoMath', 'chartsService', 
  function($scope, hypoMath, chartsService) {

    console.log("Me he cargado App");

    $scope.hipoteca = {
      n : 360,
      i : 2 / 1200,
      C : 150000,
      getCuota : function () {
       return (this.C * this.i) / (1 - Math.pow(1 + this.i, -1 * this.n));
      }
   };

    function setupBindings() {
    	document.getElementById("rangeInterest").addEventListener('change', changeValue, false);
    	document.getElementById("iCapital").addEventListener('change', changeValue, false);
    	document.getElementById("iPeriodos").addEventListener('change', changeValue, false);
    }  

	var initializeData = function () {
	    var hipoteca = getHipotecaData();
	    data = hypoMath.calculateAmortizationTable(hipoteca); 
	    updateData(data,hipoteca); 
   } 


    var getHipotecaData = function () {
      var interest = document.getElementById("rangeInterest").value;
      var capital = document.getElementById("iCapital").value;
      var periodos = document.getElementById("iPeriodos").value*12;
      $scope.hipoteca.i = interest / 1200;
      $scope.hipoteca.C = capital || $scope.hipoteca.C;
      $scope.hipoteca.n = periodos || $scope.hipoteca.n;

      return $scope.hipoteca;
    }

    function updateInterestRate(v){
      document.getElementById("interestRate").innerHTML = document.getElementById("rangeInterest").value;
    }

    function updateTotalInterestPaid(d) {
      var totalInterest = d.slice(-1).pop().interesTotal;
      document.getElementById("totalInterestPaid").innerHTML = Math.round(totalInterest*100)/100;      
    }

    function updatePayment(h){
      document.getElementById("cuota").innerHTML = Math.round(h.getCuota()*100)/100;
    }

    function updateCapital(h){
      document.getElementById("iCapital").value = h.C;
    }

    function updatePeriods(h){
      document.getElementById("iPeriodos").value = Math.round(h.n*100/12)/100;
    }

    var updateData = function (d,h) {
          updateInterestRate();
          updateTotalInterestPaid(d);
          updatePayment(h);
          updateCapital(h);
          updatePeriods(h);

          chartsService.updateCharts(d);
    }

    var changeValue = function () {

      var hipoteca = getHipotecaData();
      data = hypoMath.calculateAmortizationTable(hipoteca);  

      updateData(data,hipoteca);
    }    

    setupBindings();
    initializeData();

}]);