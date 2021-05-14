class Auto{
    _marca: string;
    _modelo: number;
    _potencia: number;
    _maxiVelocidad: number;
    constructor(marca: string, modelo: number,potencia: number, maxiVelocidad: number){
        this._marca = marca;
        this._modelo = modelo;
        this._potencia = potencia;
        this._maxiVelocidad = maxiVelocidad;
    }
    calcularTiempo(km) {
        let tiempo = 0;
        tiempo = km / this._maxiVelocidad;
        return console.info("El tiempo es:" + (tiempo / 3600) + "Segundos");
    }
}

const autoUno = new Auto("Fiat",2000,10,300);
const autoDos = new Auto("Ford",1990,5,250);
const autoTres = new Auto("Renault",2010,15,300);
const autoCuatro = new Auto("Chevrolet",2003,15,300);
const autoCinco = new Auto("VolsWaven",2018,20,320);

const AUTOS = [];

AUTOS.push(autoUno,autoDos,autoTres,autoCuatro,autoCinco);
console.info(AUTOS);

console.info(autoUno.calcularTiempo(400))
