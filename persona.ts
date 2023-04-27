class Persona
{
    // Attributes
	cedula: number;
	nombres: string;
	apellidos: string;
	genero: number;
	
    // Implemented attributes

  constructor(cedula:number, nombres:string, apellidos:string, genero:number){
    this.cedula = cedula;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.genero = genero;
  }
	
    // Operations
	saludar(alguien: Persona): string {
    if(alguien.genero==1)
     return "Hi Mr " + alguien.apellidos;
		else 
     return "Hi Mss " + alguien.apellidos; 
	}
}//end class

class Main{
  execute(){
    let p1:Persona = new Persona(1, "Juan", "Perez", 2);
    let p2:Persona = new Persona(2, "Maria", "García", 1);
    let s:string = p1.saludar(p2);
    console.log(s);
    s = p2.saludar(p1);
    console.log(s);
  }
}

let m = new Main();
m.execute();

