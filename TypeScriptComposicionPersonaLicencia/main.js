import { Persona } from "./persona.js";
//import { LicenciaConduccion } from "./licencia";
function test() {
    let juan = new Persona("Juan", "1", 17101999);
    juan.registrarSolicitudLicencia();
    juan.registrarSolicitudLicencia();
    juan.registrarSolicitudLicencia();
    juan.registrarAprobacionLicencia(1);
    juan.imprimirLicencias();
    juan.registrarAprobacionLicencia(4);
}
test();
