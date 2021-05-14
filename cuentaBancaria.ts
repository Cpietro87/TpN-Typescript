let monto = 50000;
 class CuentaBancaria{
     _numCuenta: number;
   constructor(numCuenta: number){
     this._numCuenta = numCuenta;
   }
   extraccion(montoExtraccion: number){
     if(montoExtraccion > 100000){
       console.info("El monto a extraer es mayor a 100000")
     }
     else if(monto < montoExtraccion){
       console.info("No hay monto suficiente");
     }
     else{
       console.info("El monto total es:" + (monto - montoExtraccion));
     }
   }
   depositar(deposito: number){
     if(deposito >= 500000){
       console.info("El monto a Depositar supera los 500000");
     }
     else{
      console.info("El monto total es: " + (monto + deposito));
     } 
   }
 }
 
const cuentaUno = new CuentaBancaria(352); 
cuentaUno.extraccion(500);
cuentaUno.extraccion(60000);
cuentaUno.depositar(500);
cuentaUno.depositar(500100);
