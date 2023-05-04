import { Persona, Serie, MyApp } from "./series.js";
function agregarPersona() {
    let txtNombrePersona = document.getElementById("txtNombrePersona");
    let lstPersonas = document.getElementById("lstPersonas");
    let nombre = "";
    let opt = null;
    let p;
    if (txtNombrePersona != null && lstPersonas != null) {
        nombre = txtNombrePersona.value;
        txtNombrePersona.value = "";
        p = new Persona(nombre, "sinImagen");
        if (MyApp.personas.indexOf(p) == -1) {
            MyApp.personas.push(p);
            opt = document.createElement('option');
            opt.value = p;
            opt.text = p.nombre;
            lstPersonas.add(opt);
        }
    }
}
function agregarSerie() {
    let txtNombreSerie = document.getElementById("txtNombreSerie");
    let lstSeries = document.getElementById("lstSeries");
    let nombre = "";
    let opt = null;
    let s;
    if (txtNombreSerie != null && lstSeries != null) {
        nombre = txtNombreSerie.value;
        txtNombreSerie.value = "";
        s = new Serie(nombre);
        if (MyApp.series.indexOf(s) == -1) {
            MyApp.series.push(s);
            opt = document.createElement('option');
            opt.value = s;
            opt.text = s.nombre;
            lstSeries.add(opt);
        }
    }
}
function asociarActor() {
    let lstPersonas = document.getElementById("lstPersonas");
    let lstSeries = document.getElementById("lstSeries");
    let indexSerie, indexPersona;
    let p = null, s = null;
    if (lstPersonas != null && lstSeries != null) {
        indexPersona = lstPersonas.selectedIndex;
        indexSerie = lstSeries.selectedIndex;
        if (indexPersona != -1 && indexSerie != -1) {
            p = MyApp.personas[indexPersona];
            s = MyApp.series[indexSerie];
            s.registrarActor(p);
            alert("Asociación Exitosa");
        }
    }
}
function mostrarSeries() {
    let out = document.getElementById("output");
    let html = "<p>Nada por ahora...</p>";
    if (out != null) {
        html = "<ul>";
        MyApp.series.forEach(serie => {
            html += "<li>Serie: " + serie.nombre;
            html += "<ul>";
            serie.actores.forEach((actor, index) => {
                html += "<li>Actor" + (index + 1) + ": " + actor.nombre + "</li>";
            });
            html += "</ul>";
        });
        html += "</ul>";
        out.innerHTML = html;
    }
    console.log(MyApp);
}
function initEvents() {
    let myButton = document.getElementById("cmdGenerarReporte");
    if (myButton != null)
        myButton.onclick = mostrarSeries;
    myButton = document.getElementById("cmdAgregarPersona");
    if (myButton != null)
        myButton.onclick = agregarPersona;
    myButton = document.getElementById("cmdAgregarSerie");
    if (myButton != null)
        myButton.onclick = agregarSerie;
    myButton = document.getElementById("cmdAsociar");
    if (myButton != null)
        myButton.onclick = asociarActor;
    console.log("init...");
}
initEvents();
