 document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    console.log("Código:", codigo);
    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Dirección:", direccion);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);

    alert(`Cliente registrado:\n\nCódigo: ${codigo}\nNombre completo: ${nombre} ${apellidos}\nCorreo: ${correo}`);

    document.getElementById("formRegistro").reset();
  });