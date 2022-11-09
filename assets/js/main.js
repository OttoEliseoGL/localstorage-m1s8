console.log("Entro al main.js");

// localStorage.setItem("colorPagina", "green");
// const titulo = document.getElementById("titulo");
// let color = localStorage.getItem("colorPagina");
// console.log(color);
// if (color == null) {
//     color = "pink"
// };

// titulo.style.color = color;

// localStorage.clear();

let nombres = [];
let nombre_previo = "";
let editando = false;

const nombreInput = document.getElementById("nombreInput");
const lista = document.getElementById("lista");

function agregarNombre() {
    const nombre = nombreInput.value;
    if (editando == true) {

    } else {
        nombres.push(nombre);
        localStorage.setItem("nombres", JSON.stringify(nombres));
        nombreInput.value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    lista.innerHTML = "";
    console.log("Entrao a actualizarLista")
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-group-item");
        lista.appendChild(li);

    });
}

function limpiarStorage() {
    localStorage.clear();
    nombres = [];
    console.log(nombres);
}