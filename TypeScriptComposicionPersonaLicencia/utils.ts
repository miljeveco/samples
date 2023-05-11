export var numeroLicencia = 1;
export enum estadoLicencias { 
  SOLICITADA,
  APROBADA,
  RECHAZADA,
  VENCIDA
}
export const nombreEstadoLicencias = ["Solicitada", "Aprobada", "Rechazada", "Vencida"];

export function generarNumeroLicencia(){
return numeroLicencia++;
}