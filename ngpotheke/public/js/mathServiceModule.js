angular.module('app')
	.factory('hypoMath', function () {

		var my = {};

		my.calculateAmortizationTable = function (h) {
			var n = h.getPeriods(),
				i = h.getInterest(),
				c = my.calculateCuota(h),
				k = h.Capital,
				j = 0,
				kp = 0,
				ip = 0,
				kt = 0,
				it = 0,
				d = 0;

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
					AddToTabla(tabla, j, k, i * k, kt + k, it + (i * k));
				}
				k = d;
			}

			return tabla;
		}

		my.calculateCuota = function (h) {
			return (h.Capital * h.getInterest() / (1 - Math.pow(1 + h.getInterest(), -1 * h.getPeriods())));
		}

		function AddToTabla(h, j, k, i, kt, it) {
			h.push({
				periodo: j,
				capitalPeriodo: k,
				interesPeriodo: i,
				capitalTotal: kt,
				interesTotal: it
			})
		}

		return my;

	});