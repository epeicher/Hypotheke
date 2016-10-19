export default class Hipoteca {
    capital: number;
    agnos: number;
    interes: number;
    cuota: number;
    totalInteres: number;
    tablaAmortizacion: ItemHipoteca[];
}

export class ItemHipoteca {
    periodo : number;
    capitalPeriodo : number;
    interesPeriodo : number;
    interesTotal : number;
    capitalTotal : number;
}