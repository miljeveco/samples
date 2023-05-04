import { Persona, Serie } from "./series.js";

export function mostrarSeries() {

    let p1: Persona = new Persona("Sebastian Martinez", "*");
    let p2: Persona = new Persona("Ana Lucia Dominguez", "*");
    let s1: Serie = new Serie("Palpito");
    let s2: Serie = new Serie("Gambito de Dama");
    let out = document.getElementById("output");
    let html: string = "<p>Nada por ahora...</p>";
    //...
    console.log(p1);
    console.log(p2);
    console.log(s1);

    s1.registrarActor(p1);
    s1.registrarActor(p2);
    s1.registrarActor(p1);

    html = "<ul>" +
        "<li>Serie: " + s1.nombre +
        "<ul>" +
        "<li>Actor1: " + p1.nombres + "</li>" +
        "<li>Actor2: " + p2.nombres + "</li>" +
        "</ul>" +
        "</li>" +
        "<li>Serie: " + s2.nombre + "</li>" +
        "</ul>";

    if (out != null)
        out.innerHTML = html;
}

mostrarSeries();