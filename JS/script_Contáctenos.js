 document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    alert(`Gracias por contactarnos, ${nombre}.\n\nMensaje recibido:\n"${mensaje}"`);

    document.getElementById("formContacto").reset();
  });