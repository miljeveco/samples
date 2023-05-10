class Punto{
    x:number;
    y:number;

    constructor(x:number, y:number){
     this.x = x;
     this.y = y;
    }

    calcularDistancia(otro:Punto):number{
      return Math.sqrt((this.x - otro.x)*(this.x-otro.x) + (this.y-otro.y)*(this.y-otro.y));
    }
}

class Triangulo{
    punto1:Punto;
    punto2:Punto;
    punto3:Punto;

    constructor(punto1:Punto, punto2:Punto,  punto3:Punto){
      this.punto1 = punto1;
      this.punto2 = punto2;
      this.punto3 = punto3;
    }
    calcularPerimetro():number{
      let d1:number = this.punto1.calcularDistancia(this.punto2);
      let d2:number = this.punto1.calcularDistancia(this.punto3);
      let d3:number = this.punto2.calcularDistancia(this.punto3);
      return d1 + d2 + d3;
    }
}

function test(){
 let p1:Punto = new Punto(1,1);
 let p2:Punto = new Punto(10,10);
 let p3:Punto = new Punto(-10,-10);
 let t1:Triangulo = new Triangulo(p1,p2,p3);
 console.log(t1);
 console.log("Perímetro: " + t1.calcularPerimetro());
}

test();
