angular.module('app',['mathServiceModule', 'charts'])
.controller('HypoCtrl', ['$scope','hypoMath', 'chartsService', 
  function($scope, hypoMath, chartsService) {

    $scope.hipoteca = {
      n : 30,
      i : 2,
      C : 150000,
      getAnnos: function() { return this.n * 12; },
      getInterest: function() {return this.i / 1200;},
      getCuota : function () { 
        var c = hypoMath.calculateCuota(this);
        return Math.round(c*100)/100;
      }
   };

	var initializeData = function () {
	    changeValue();
   } 

    function updateTotalInterestPaid(d) {
      var totalInterest = d.slice(-1).pop().interesTotal;
      document.getElementById("totalInterestPaid").innerHTML = Math.round(totalInterest*100)/100;      
    }

    var updateData = function (d) {
          updateTotalInterestPaid(d);        

          chartsService.updateCharts(d);
    }

    var changeValue = function () {

      data = hypoMath.calculateAmortizationTable($scope.hipoteca);  
	  $scope.hipoteca.tablaAmortizacion = data;

      updateData(data);
    }

    $scope.onChange = function() {
      changeValue();
    }    

    initializeData();

}]);