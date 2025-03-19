// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Ingresar un nombre");
        return;
    }

    arregloAmigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();


}

function actualizarLista() {
    const listaAmigos =document.getElementById("listaAmigos")
    listaAmigos.innerHTML = "";

    arregloAmigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (arregloAmigos.length === 0) {
        alert("No hay amigos disponibles, ingresar nombres primero.");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * arregloAmigos.length);

    const amigoSorteado = arregloAmigos[indiceAleatorio]; 

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});