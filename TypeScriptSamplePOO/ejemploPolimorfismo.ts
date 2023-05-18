class MedioDeTransporte{
   x:number = 1;
   hacerAlgo():string{
     return "algo";
   }

   //get y set
}

class Vehiculo extends MedioDeTransporte{
  y:number = 2;
  
  hacerAlgo():string{
     return "vehiculo algo";
   }
}

class Motorizado extends Vehiculo{}

class Bicicleta extends Vehiculo{

  hacerAlgo():string{
     return "bicicleta algo";
   }
}

class Carro extends Motorizado{

  hacerAlgo():string{
     return "carro algo";
   }
}

class Motocicleta extends Motorizado{

  hacerAlgo():string{
     return "motocicleta algo";
   }
}

function imprimirObjeto(obj:MedioDeTransporte){
  console.log("X= " + obj.x);
}

function imprimirObjetos(objs:MedioDeTransporte []){
  let validacion:boolean = false;
  for(let i:number = 0; i<objs.length;i++){
     validacion = objs[i] instanceof Motorizado;// >, < == != ===
    if(validacion){
      console.log("Motorizado no ha implementado método de la superclase. si la subclase no lo implementa, se imprimirá la  implementación default de la superclase");
    }
    if(objs[i] instanceof Bicicleta){
      console.log("***");
    }
    console.log(objs[i].hacerAlgo());
  }
}

function modificarObjeto(obj:MedioDeTransporte){
  obj.x = 3;
}

function test1(){
  //polimorfismo operador instaceof
  let m:MedioDeTransporte = null;
  let v:Vehiculo = null;
  let mt:Motorizado = null;
  //hojas del árbol de herencia
  let b:Bicicleta = new Bicicleta();
  let c:Carro = new Carro();
  let mtc:Motocicleta = new Motocicleta();
  console.log("Polimorfismo con m:MedioDeTransporte");
  m = b;
  console.log(m);
  m = c;
  console.log(m);
  m = mtc;
  console.log(m);
  console.log("Polimorfismo con v:Vehiculo");
  v = b;
  console.log(v);
  v = c;
  console.log(v);
  v = mtc;
  console.log(v);
  console.log("Polimorfismo con mt:Motorizado");
  mt = c;
  console.log(mt);
  mt = mtc;
  console.log(mt);
  console.log("Polimorfismo función");
  modificarObjeto(c);
  imprimirObjeto(c);
  console.log(m.hacerAlgo());
  imprimirObjetos([new Carro(), new Bicicleta(), new Motocicleta(), new Vehiculo(), new MedioDeTransporte()]);
}

test1();

/*
<ul>
<li>Enero</li>
<li>Febrero...</li>
</ul>

<ol>
 <li>Lunes</li>
 <li>Martes</li>
</ol>

<table>
<tr>
 <th>Codigo</th>
 <td>15</td>
</tr>
</table>
*/

//Fundamentos de POO Programación
//Análisis
//Diseño
//Pruebas
//Arquitectura
//Buenas prácticas
//Principios SOLID (sigla/acronimo)
//Single Respoinsability
//Open-Close
//
