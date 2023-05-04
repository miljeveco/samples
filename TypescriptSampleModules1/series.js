export class Persona {
    constructor(nombres, fotografia) {
        this.nombres = nombres;
        this.fotografia = fotografia;
    }
}
export class Serie {
    constructor(nombre) {
        this.nombre = nombre;
        this.directores = [];
        this.actores = [];
    }
    registrarActor(p) {
        let ok = false;
        if (this.actores.indexOf(p) == -1) {
            this.actores.push(p);
            ok = true;
            console.log("Actor registrado");
            console.log(p);
        }
        else
            console.log("Error, repetido");
        return ok;
    }
}
export class Episodio {
}
