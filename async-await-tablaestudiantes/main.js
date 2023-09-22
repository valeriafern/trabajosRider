//codigo original sin promesas ni nada

// let currentId = 0; // Cambia el valor inicial del ID

// function abrirModal() {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// function cerrarModal() {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// function agregarEstudianteDesdeModal() {
//   const nombre = document.getElementById("nombre").value;
//   const nota1 = parseFloat(document.getElementById("nota1").value);
//   const nota2 = parseFloat(document.getElementById("nota2").value);
//   const nota3 = parseFloat(document.getElementById("nota3").value);
//   const definitiva = (nota1 + nota2 + nota3) / 3;

//   if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
//     agregarEstudiante(currentId++, nombre, nota1, nota2, nota3, definitiva); // Incrementa el ID antes de agregar
//     cerrarModal();
//     console.log("Estudiante agregado correctamente");
//   } else {
//     console.error("Por favor, ingresa datos válidos.");
//   }
// }

// function agregarEstudiante(id, nombre, nota1, nota2, nota3, definitiva) {
//   const tabla = document.getElementById("tablaEstudiantes");
//   const nuevaFila = tabla.insertRow(-1);

//   nuevaFila.setAttribute("data-id-estudiante", id); // Almacena el ID en un atributo personalizado

//   const celda1 = nuevaFila.insertCell(0);
//   const celda2 = nuevaFila.insertCell(1);
//   const celda3 = nuevaFila.insertCell(2);
//   const celda4 = nuevaFila.insertCell(3);
//   const celda5 = nuevaFila.insertCell(4);
//   const celda6 = nuevaFila.insertCell(5);
//   const celda7 = nuevaFila.insertCell(6);

//   celda1.innerHTML = id;
//   celda2.innerHTML = nombre;
//   celda3.innerHTML = nota1;
//   celda4.innerHTML = nota2;
//   celda5.innerHTML = nota3;
//   celda6.innerHTML = definitiva.toFixed(2);
//   celda7.innerHTML = `
//     <button class="editing" data-id-estudiante="${id}" onclick="editarEstudiante(${id})">Editar</button>
//     <button onclick="eliminarEstudiante(this)">Eliminar</button>
//   `;
// }

// let estudianteAEditar = null;

// function editarEstudiante(id) {
//   const modalEdit = document.getElementById("myModalEdit");
//   modalEdit.style.display = "block";

//   estudianteAEditar = id;

//   const fila = document.querySelector(`#tablaEstudiantes tr[data-id-estudiante="${id}"]`);
//   const celdas = fila.cells;

//   const nombre = celdas[1].innerHTML;
//   const nota1 = parseFloat(celdas[2].innerHTML);
//   const nota2 = parseFloat(celdas[3].innerHTML);
//   const nota3 = parseFloat(celdas[4].innerHTML);

//   document.getElementById("idEdit").value = id;
//   document.getElementById("nombreEdit").value = nombre;
//   document.getElementById("nota1Edit").value = nota1;
//   document.getElementById("nota2Edit").value = nota2;
//   document.getElementById("nota3Edit").value = nota3;
// }

// function cerrarModalEdit() {
//   const modalEdit = document.getElementById("myModalEdit");
//   modalEdit.style.display = "none";
// }

// function guardarEstudianteEditado() {
//   const id = estudianteAEditar;
//   const nombre = document.getElementById("nombreEdit").value;
//   const nota1 = parseFloat(document.getElementById("nota1Edit").value);
//   const nota2 = parseFloat(document.getElementById("nota2Edit").value);
//   const nota3 = parseFloat(document.getElementById("nota3Edit").value);
//   const definitiva = (nota1 + nota2 + nota3) / 3;

//   if (!isNaN(id) && nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
//     const tabla = document.getElementById("tablaEstudiantes");
//     const fila = tabla.querySelector(`tr[data-id-estudiante="${id}"]`);
//     const celdas = fila.cells;

//     celdas[1].innerHTML = nombre;
//     celdas[2].innerHTML = nota1;
//     celdas[3].innerHTML = nota2;
//     celdas[4].innerHTML = nota3;
//     celdas[5].innerHTML = definitiva.toFixed(2);

//     cerrarModalEdit();
//   } else {
//     alert("Por favor, ingresa datos válidos.");
//   }
// }

// function eliminarEstudiante(boton) {
//   const fila = boton.parentNode.parentNode;
//   fila.parentNode.removeChild(fila);
// }






/////////////codigo con  async y await

let currentId = 0; // Cambia el valor inicial del ID

function abrirModal() {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    resolve();
  });
}

function cerrarModal() {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    resolve();
  });
}

async function agregarEstudianteDesdeModal() {
  const nombre = document.getElementById("nombre").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const definitiva = (nota1 + nota2 + nota3) / 3;

  if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    try {
      await agregarEstudiante(
        currentId++,
        nombre,
        nota1,
        nota2,
        nota3,
        definitiva
      );
      await cerrarModal();
      console.log("Estudiante agregado correctamente");
    } catch (error) {
      console.error(error);
      throw new Error("Error al agregar estudiante");
    }
  } else {
    console.error("Por favor, ingresa datos válidos.");
    throw new Error("Datos inválidos");
  }
}

function agregarEstudiante(id, nombre, nota1, nota2, nota3, definitiva) {
  return new Promise((resolve, reject) => {
    const tabla = document.getElementById("tablaEstudiantes");
    const nuevaFila = tabla.insertRow(-1);

    nuevaFila.setAttribute("data-id-estudiante", id); // Almacena el ID en un atributo personalizado

    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    const celda3 = nuevaFila.insertCell(2);
    const celda4 = nuevaFila.insertCell(3);
    const celda5 = nuevaFila.insertCell(4);
    const celda6 = nuevaFila.insertCell(5);
    const celda7 = nuevaFila.insertCell(6);

    celda1.innerHTML = id;
    celda2.innerHTML = nombre;
    celda3.innerHTML = nota1;
    celda4.innerHTML = nota2;
    celda5.innerHTML = nota3;
    celda6.innerHTML = definitiva.toFixed(2);
    celda7.innerHTML = `
      <button class="editing" data-id-estudiante="${id}" onclick="editarEstudiante(${id})">Editar</button>
      <button onclick="eliminarEstudiante(this)">Eliminar</button>
    `;

    resolve();
  });
}

let estudianteAEditar = null;

async function editarEstudiante(id) {
  const modalEdit = document.getElementById("myModalEdit");
  modalEdit.style.display = "block";

  estudianteAEditar = id;

  const fila = document.querySelector(
    `#tablaEstudiantes tr[data-id-estudiante="${id}"]`
  );
  const celdas = fila.cells;

  const nombre = celdas[1].innerHTML;
  const nota1 = parseFloat(celdas[2].innerHTML);
  const nota2 = parseFloat(celdas[3].innerHTML);
  const nota3 = parseFloat(celdas[4].innerHTML);

  document.getElementById("idEdit").value = id;
  document.getElementById("nombreEdit").value = nombre;
  document.getElementById("nota1Edit").value = nota1;
  document.getElementById("nota2Edit").value = nota2;
  document.getElementById("nota3Edit").value = nota3;
}

async function cerrarModalEdit() {
  const modalEdit = document.getElementById("myModalEdit");
  modalEdit.style.display = "none";
}

async function guardarEstudianteEditado() {
  const id = estudianteAEditar;
  const nombre = document.getElementById("nombreEdit").value;
  const nota1 = parseFloat(document.getElementById("nota1Edit").value);
  const nota2 = parseFloat(document.getElementById("nota2Edit").value);
  const nota3 = parseFloat(document.getElementById("nota3Edit").value);
  const definitiva = (nota1 + nota2 + nota3) / 3;

  if (!isNaN(id) && nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const tabla = document.getElementById("tablaEstudiantes");
    const fila = tabla.querySelector(`tr[data-id-estudiante="${id}"]`);
    const celdas = fila.cells;

    celdas[1].innerHTML = nombre;
    celdas[2].innerHTML = nota1;
    celdas[3].innerHTML = nota2;
    celdas[4].innerHTML = nota3;
    celdas[5].innerHTML = definitiva.toFixed(2);

    await cerrarModalEdit();
  } else {
    alert("Por favor, ingresa datos válidos.");
    throw new Error("Datos inválidos");
  }
}

async function eliminarEstudiante(boton) {
  const fila = boton.parentNode.parentNode;
  fila.parentNode.removeChild(fila);
}

// Función para cargar estudiantes utilizando getData y mostrarlos con showData
async function cargarEstudiantes() {
  try {
    const estudiantes = await getData(); // Suponiendo que tienes una función getData que devuelve los datos de los estudiantes
    await showData(estudiantes);
  } catch (error) {
    console.error("Error al cargar los estudiantes:", error);
  }
}

// Función para mostrar estudiantes en la tabla
async function showData(estudiantes) {
  for (const estudiante of estudiantes) {
    await agregarEstudiante(
      estudiante.id,
      estudiante.nombre,
      estudiante.nota1,
      estudiante.nota2,
      estudiante.nota3,
      (estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3
    );
  }
}

// Función para simular la obtención de datos (reemplaza esto con tu propia función)
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
    }, 1000);
  });
}

// Llamamos a la función cargarEstudiantes cuando se cargue la página
window.addEventListener("load", cargarEstudiantes);