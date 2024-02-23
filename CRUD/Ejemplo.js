// Array para almacenar los usuarios
let users = [];

function mostrarUsuarios() {
    // Mostrar la lista de usuarios en el HTML
    const lista = document.getElementById("Lista");
    lista.innerHTML = ''; // Limpiar la lista antes de mostrar los usuarios
    users.forEach((user) => {
      const item = document.createElement("li");
      item.textContent = user.name;

      const eliminar = document.createElement('button');
      eliminar.textContent = 'Eliminar';
      eliminar.onclick = () => Eliminar(user);
      item.appendChild(eliminar);

      const editar = document.createElement('button');
      editar.textContent = 'Editar';
      editar.onclick = () => Editar(user);
      item.appendChild(editar);

      lista.appendChild(item);
    });
  }
  
  function agregarJugador() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
  
    if (name !== "") {
      users.push({ name });
      mostrarUsuarios();
      nameInput.value = ''; // Limpiar el campo de entrada después de agregar el usuario
    } else {
      alert("No se ingreso un Nombre");
    }
  }

function Eliminar(){}

function Editar(){}
