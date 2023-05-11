export var numeroLicencia = 1;
export var estadoLicencias;
(function (estadoLicencias) {
    estadoLicencias[estadoLicencias["SOLICITADA"] = 0] = "SOLICITADA";
    estadoLicencias[estadoLicencias["APROBADA"] = 1] = "APROBADA";
    estadoLicencias[estadoLicencias["RECHAZADA"] = 2] = "RECHAZADA";
    estadoLicencias[estadoLicencias["VENCIDA"] = 3] = "VENCIDA";
})(estadoLicencias || (estadoLicencias = {}));
export const nombreEstadoLicencias = ["Solicitada", "Aprobada", "Rechazada", "Vencida"];
export function generarNumeroLicencia() {
    return numeroLicencia++;
}
