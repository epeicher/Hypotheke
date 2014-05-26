(function () {

	this.app = this.app || {};
	var ns = this.app;

	ns.hipoteca = {
	    n : 360,
	    i : 2 / 1200,
	    C : 150000,
	    getCuota : function () {
	     return (this.C * this.i) / (1 - Math.pow(1 + this.i, -1 * this.n));
	    }
   };


}());   