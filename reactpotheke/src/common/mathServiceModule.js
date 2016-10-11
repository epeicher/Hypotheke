export default {

	calculateAmortizationTable : function (h) {
	    var n = h.getAnnos(),
	     i = h.getInterest(),
	     c = this.calculateCuota(h),
	     k = h.C,
	     j = 0,
	     kp = 0,
	     ip = 0,
	     kt = 0,
	     it = 0,
	     d = 0,
		 tabla = [];

	    while (n > 0) {
	     n -= 1;
	     j += 1;

	     if (n > 0)
	     {
	      kp = c - i * k;
	      ip = i * k;
	      kt += kp;
	      it += ip;
	      d = (1 + i) * k - c;
	      AddToTabla(tabla, j, kp, ip, kt, it);
	     }
	     else
	     {
	      AddToTabla(tabla, j, k, i * k, kt, it);
	     }
	     k = d;
	    }

	    return tabla;
	},

	calculateCuota : function (h) {
		return (h.C * h.getInterest() / (1 - Math.pow(1 + h.getInterest(), -1 * h.getAnnos())));
	}
}

function AddToTabla(h,j,k,i,kt,it) {
	h.push({
		periodo : j,
		capitalPeriodo : k,
		interesPeriodo : i,
		capitalTotal: kt,
		interesTotal: it
		})
}