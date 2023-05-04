export class Persona {
    nombres: string;
    fotografia: string;

    constructor(nombres: string, fotografia: string) {
        this.nombres = nombres;
        this.fotografia = fotografia;
    }
}

export class Serie {
    nombre: string;
    directores: Persona[];
    actores: Persona[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.directores = [];
        this.actores = [];
    }

    registrarActor(p:Persona):boolean{
        let ok:boolean  = false;
        if(this.actores.indexOf(p)==-1){
         this.actores.push(p);
         ok = true;
         console.log("Actor registrado");
         console.log(p);
        }
        else console.log("Error, repetido");
        return ok;
    }
}

export class Episodio{

}