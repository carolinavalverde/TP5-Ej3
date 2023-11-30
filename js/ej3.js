document.addEventListener("DOMContentLoaded", function () {
  const tareaInput = document.getElementById("tareaInput");
  const agregarBtn = document.getElementById("agregarBtn");
  const listaTareas = document.getElementById("listaTareas");

  agregarBtn.addEventListener("click", function () {
    agregarTarea();
  });

  tareaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      agregarTarea();
    }
  });

  function agregarTarea() {
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {
      const nuevaTarea = document.createElement("li");
      nuevaTarea.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevaTarea.innerHTML = `
                ${tareaTexto}
                <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)"><i class="fa-solid fa-xmark fa-xl"></i></button>
            `;

      listaTareas.appendChild(nuevaTarea);

      tareaInput.value = "";
    }
  }
});

function eliminarTarea(elemento) {
  const tarea = elemento.parentNode;
  tarea.remove();
}
