
function calculateAmortizationTable(h) {
    let n = getAnnos(h)
    let	i = getInterest(h)
    let	c = calculateCuota(h)
    let	k = h.Capital
    let [j, kp, ip, kt, it, d] = [0, 0, 0, 0, 0, 0];
    let tabla = [];

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
}

function calculateCuota(h) {
    return (h.Capital * getInterest(h) / (1 - Math.pow(1 + getInterest(h), -1 * getAnnos(h))));
}

function getInterest(h) {
    return h.InterestRate / 1200;
}

function getAnnos(h) {
    return h.Years * 12;
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

export {
    calculateAmortizationTable,
    calculateCuota
}