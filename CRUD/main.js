// Array para almacenar los usuarios
let Lista = [];

function mostrarUsuarios() {
  const lista = document.getElementById("Lista");
  lista.innerHTML = '';

  for (var i = 0; i < Lista.length; i++){
    // Crear un nuevo elemento li
    var elementoLi = document.createElement("li");
    // Asignar el texto con los datos del usuario al elemento li
    elementoLi.textContent = "Nombre: " + Lista[i].nombre + " - " + Lista[i].edad + " años" + " - Posición: " + Lista[i].posicion;
    
    var buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = 'Eliminar';
    lista.appendChild(buttonEliminar);

    var buttonEditar = document.createElement("button");
    buttonEditar.textContent = 'Editar';
    lista.appendChild(buttonEditar);

    // Agregar el elemento li a la lista
    lista.appendChild(elementoLi);
  }

}
  
function agregarJugador() {
  const Nombre = document.getElementById("name").value;
  const Edad = document.getElementById("age").value;
  const Posicion = document.getElementById("pos").value;
  //const Imagen = document.getElementById("pic");

  var NuevoJugador = {nombre: Nombre, edad: Edad, posicion: Posicion};
  Lista.push(NuevoJugador);

  mostrarUsuarios();

  //Limpia los campos
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("pos").value = "";
  //Imagen.value = "";

  
  
}

function Eliminar(){}

function Editar(){}
