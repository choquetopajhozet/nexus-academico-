
/* =================================
   NEXUS ACADÉMICO - FUNCIONES
================================= */

// Mostrar aviso mientras todavía no hay PDF cargados
function mostrarAviso(materia) {
    alert(
        "Has seleccionado: " + materia +
        "\n\nPróximamente podrás consultar los archivos PDF."
    );
}

// Publicar comentarios en la página
const formulario = document.getElementById("formulario-comentario");
const listaComentarios = document.getElementById("lista-comentarios");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (nombre === "" || comentario === "") {
        alert("Por favor, completa tu nombre y tu comentario.");
        return;
    }

    // Crear el contenedor del comentario
    const tarjeta = document.createElement("div");
    tarjeta.className = "comentario-publicado";

    // Mostrar el nombre de forma segura
    const autor = document.createElement("strong");
    autor.textContent = nombre;

    // Mostrar el texto del comentario
    const texto = document.createElement("p");
    texto.textContent = comentario;

    tarjeta.appendChild(autor);
    tarjeta.appendChild(texto);

    listaComentarios.prepend(tarjeta);

    // Limpiar el formulario
    formulario.reset();
});
