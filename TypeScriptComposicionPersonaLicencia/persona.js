import { generarNumeroLicencia, estadoLicencias } from "./utils.js";
import { LicenciaConduccion } from "./licencia.js";
export class Persona {
    // Implemented attributes
    constructor(nombre, cedula, fechaNacimiento) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.licenciasConduccion = [];
    }
    registrarSolicitudLicencia() {
        let licencia = new LicenciaConduccion(generarNumeroLicencia(), 20230102, estadoLicencias.SOLICITADA, this);
        this.licenciasConduccion.push(licencia);
        return licencia.numero;
    }
    registrarAprobacionLicencia(numeroAprobado) {
        let licencia = this.licenciasConduccion.find(e => e.numero == numeroAprobado);
        if (licencia == undefined) {
            console.log("Error...");
        }
        else {
            licencia.aprobar();
        }
    }
    imprimirLicencias() {
        this.licenciasConduccion.forEach(licencia => {
            console.log(licencia.numero + " -> " + licencia.getEstado());
        });
    }
}
