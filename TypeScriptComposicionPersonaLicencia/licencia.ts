import { numeroLicencia, estadoLicencias, nombreEstadoLicencias } from "./utils.js";
import {Persona} from "./persona.js";

export class LicenciaConduccion{
    // Attributes
	numero: number;
	fecha: number;
	estado: number;
	persona: Persona;
	
  constructor(numero:number, fecha:number, estado:number, persona:Persona){
    this.numero = numero;
    this.fecha = fecha;
    this.estado = estado;
    this.persona = persona;
  }

  getEstado():string{
    return nombreEstadoLicencias[this.estado];
  }
	
	aprobar() {
	  this.estado = estadoLicencias.APROBADA;
	}
}