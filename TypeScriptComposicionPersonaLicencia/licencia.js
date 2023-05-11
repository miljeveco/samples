import { estadoLicencias, nombreEstadoLicencias } from "./utils.js";
export class LicenciaConduccion {
    constructor(numero, fecha, estado, persona) {
        this.numero = numero;
        this.fecha = fecha;
        this.estado = estado;
        this.persona = persona;
    }
    getEstado() {
        return nombreEstadoLicencias[this.estado];
    }
    aprobar() {
        this.estado = estadoLicencias.APROBADA;
    }
}
