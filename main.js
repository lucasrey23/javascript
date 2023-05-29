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
`
let formularioUno = document.getElementById("formularioUno");
formularioUno.addEventListener("submit", (e) => {
    let nombre = document.getElementById("nombre").value 
    e.preventDefault();
    let inputs = e.target.children;
    let bienvenida = document.createElement("div");
div.innerHTML = `<div class="container-fluid text-center">
<h1>
    Hola ${nombre} espero estes super bien, vamos a usar tu nombre en esta historia y espero no te moleste al darle a continuar empieza la diversion
</h1>
<button id="continuarTercero">Continuar</button>
</div>`
let continuarTercero = document.getElementById("continuarTercero");
continuarTercero.addEventListener("click", () => {
    let primerAcertijo = document.createElement("div");
    div.innerHTML = `<div class="container-fluid text-center">
    <h2>
        ${nombre}, un cazador de tesoros super conocido estaba en su busqueda mas importante la "insignia Salazar", claro sabia que su recorrido no iba a ser facil pero aun asi emprendió su viaje.
        Adentrandose en lo mas profundo del bosque lo encontró, no lo podia creer ${nombre} estaba en shock, frente a sus ojos estaba el templo Salazar, una leyenda que hace 7 años buscaba y no lograba encontrar pero ahi estaba, sin mas rodeos quiso entrar pero como era de esperarse en la puerta principal habian unas letras que podias ordenar: "arpoabr" ANAGRAMA penso rapidamente ${nombre}, habia que ordenar las letras para entrar, que palabra será? 
    </h2>
    <form id="formularioDos">
        <input type="text" id="anagrama">
        <button id="continuarCuarto">Continuar</button>
    </form>
    </div>`
let formularioDos = document.getElementById("formularioDos");
formularioDos.addEventListener("submit", (e) => {
    let anagrama = document.getElementById("anagrama").value
    e.preventDefault();
    let inputs = e.target.children;
    while (anagrama !== "aprobar" ){
        let acertijo = document.createElement("div");
        div.innerHTML = `<div class="contaier-fluid text-center">
        <h2>no sucede absolutamente nada, me equivoque pensó ${nombre} soy re tonto dios era ultra facil no lo puedo creer le falle a toda mi familia y a todos mis principios y a nada de rendirse dijo na bueno dale lo intento devuelta..</h2>
        <form id="formularioDos">
        <input type="text" id="anagrama">
        <button id="continuarCuarto">Continuar</button>
    </form>
    </div>`
    anagrama = document.getElementById("anagrama").value
    }
    alert("sos un caspo");
});
});
});
});



