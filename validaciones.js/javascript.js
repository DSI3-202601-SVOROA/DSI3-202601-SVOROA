function validar() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nota = document.getElementById("nota").value;

    if (nombre === "" || edad === "" || nota === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    alert("Hola " + nombre);

    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }

    if (nota >= 3) {
        alert("Aprobó");
    } else {
        alert("Reprobó");
    }
}