let div = document.createElement("div");
div.innerHTML =`<div id="primerEtapa" class="container-fluid text-center">
<h1>Te doy la bienvenida a mi super maravillosa tercer Pre-entrega de este maravilloso curso</h1>
<button id="continuar">Continuar</button>
</div>`;
document.body.append(div);
let continuar = document.getElementById("continuar");
continuar.addEventListener("click", () => {
    let inicio = document.createElement("div");
    div.innerHTML = `<div class="container-fluid text-center">
    <p id="hola">Espero estes preparada/o para la historia que vas a vivir en este momento, lleno de juegos y diversion, empecemos por el principio, indicanos tu nombre porfavor</p>
<form id="formularioUno">
    <input type="text" id="nombre">
    <button id="continuarSegundo">Continuar</button>
</form>
</div>
`});
let nombre = document.getElementById("nombre")
let formularioUno = document.getElementById("formularioUno");
formularioUno.addEventListener("desenfoque", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let bienvenida = document.createElement("div");
div.innerHTML = `<div class="container-fluid text-center">
<h1>
    Hola ${nombre} espero estes super bien, vamos a usar tu nombre en este historia y espero no te moleste al darle a continuar empieza la diversion
</h1>
<button id="continuarTercero">Continuar</button>
</div>`
});

