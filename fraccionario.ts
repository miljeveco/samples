class Fraccionario{
   numerador:number;
   denominador:number;

   constructor (numerador:number, denominador:number){
    this.numerador = numerador
    this.denominador = denominador
   }

   sumar(otro:Fraccionario ):Fraccionario{
     let suma:Fraccionario = new Fraccionario(0,0)
     suma.denominador = this.denominador*otro.denominador
     suma.numerador = this.numerador*otro.denominador + otro.numerador*this.denominador
     return suma
   }
}

function testFraccionario(){
  let f1:Fraccionario = new Fraccionario(1,2)
  let f2:Fraccionario = new Fraccionario(2,3)
  let f3:Fraccionario = f1.sumar(f2)
  console.log(f1)
  console.log(f2)
  console.log(f3)
}

testFraccionario()
