import { Injectable } from '@angular/core';
import Hipoteca, {ItemHipoteca} from '../Models/Hipoteca'

@Injectable()
export class MathService {
  
    calculateAmortizationTable(h: Hipoteca) {
        let n = getAnnos(h)
        let	i = getInterest(h)
        let	c = this.calculateCuota(h)
        let	k = h.capital;
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

    calculateCuota(h: Hipoteca) {
        return (h.capital * getInterest(h) / (1 - Math.pow(1 + getInterest(h), -1 * getAnnos(h))));
    }

}

function getInterest(h: Hipoteca) {
    return h.interes / 1200;
}

function getAnnos(h: Hipoteca) {
    return h.agnos * 12;
}

function AddToTabla(h:ItemHipoteca[],j,k,i,kt,it) {
    h.push({
        periodo : j,
        capitalPeriodo : k,
        interesPeriodo : i,
        capitalTotal: kt,
        interesTotal: it
    })
}