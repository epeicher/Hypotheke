angular.module('app',[])
  .controller('HypoCtrl', ['$scope', 'hypoMath', 'chartsService',

    function ($scope, hypoMath, chartsService) {

      $scope.hipoteca = {
        Years: 30,
        InterestRate: 2,
        Capital: 150000,
        getPeriods: function () { return this.Years * 12; },
        getInterest: function () { return this.InterestRate / 1200; },
        getCuota: function () {
          var c = hypoMath.calculateCuota(this);
          return Math.round(c * 100) / 100;
        }
      };

      function updateTotalInterestPaid(d) {
        var totalInterest = d.slice(-1).pop().interesTotal;
        $scope.hipoteca.TotalInterestPaid = Math.round(totalInterest * 100) / 100;
      }

      function updateData(d) {
        updateTotalInterestPaid(d);

        chartsService.updateCharts(d);
      }

      function changeValue() {

        data = hypoMath.calculateAmortizationTable($scope.hipoteca);
        $scope.hipoteca.tablaAmortizacion = data;

        updateData(data);
      }

      $scope.onChange = function () {
        changeValue();
      }

      changeValue();

    }]);