import { generarNumeroLicencia, estadoLicencias} from "./utils.js";
import {LicenciaConduccion} from "./licencia.js";

export class Persona{
    // Attributes
	nombre: string;
	cedula: string;
	fechaNacimiento: number;
	licenciasConduccion:LicenciaConduccion[];
	
    // Implemented attributes
    constructor(nombre:string, cedula:string, fechaNacimiento:number){
     this.nombre = nombre;
     this.cedula = cedula; 
     this.fechaNacimiento = fechaNacimiento;
     this.licenciasConduccion = [];
    }
	
	registrarSolicitudLicencia(): number {
    let licencia:LicenciaConduccion = new LicenciaConduccion(generarNumeroLicencia(), 
                                              20230102, estadoLicencias.SOLICITADA, this);
    this.licenciasConduccion.push(licencia);
		return licencia.numero;
	}
	
	registrarAprobacionLicencia(numeroAprobado: number) {
	   let licencia:LicenciaConduccion|undefined =  this.licenciasConduccion.find(e=>e.numero==numeroAprobado);
     if(licencia == undefined){
      console.log("Error...")
     }
     else{
      licencia.aprobar();
     }
	}

  imprimirLicencias(){
    this.licenciasConduccion.forEach(licencia=>{
      console.log(licencia.numero + " -> " + licencia.getEstado());
    });
  }
}