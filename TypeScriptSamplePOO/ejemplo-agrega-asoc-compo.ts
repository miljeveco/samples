class Categoria{
  series:Serie[]

  constructor(){
    this.series = []
  }
  agregarSerie(s:Serie){
   this.series.push(s)
  }
}

class Serie{
  episodios:Episodio[]
  actores:Persona[]

  constructor(){
    this.episodios = []
    this.actores = []
  }

  agregarEpisodio(nombre:string, duracion:number){
    let e:Episodio = new Episodio(nombre, duracion)
    this.episodios.push(e)
  }

  agregarActor(a:Persona){
    this.actores.push(a)
  }
}

class Episodio{
  nombre:string
  duracion:number

  constructor(nombre:string, duracion:number){
    this.nombre = nombre
    this.duracion = duracion
  }
}

class Persona{
  nombre:string
  cedula:number

  constructor(nombre:string, cedula:number){
    this.nombre = nombre
    this.cedula = cedula
  }
}

function violarComposicion(){
 let e:Episodio = new Episodio("episodio sin serie", 0) 
 let s:Serie = new Serie()
}

class Todo{
  private class Parte{

  }
}
