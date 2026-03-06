function generarInputs() {
  const n = parseInt(document.getElementById("numEstudiantes").value);

  if (isNaN(n) || n < 1 || n > 50) {
    alert("Ingresa un número entre 1 y 50.");
    return;
  }

  const contenedor = document.getElementById("contenedorEstudiantes");
  contenedor.innerHTML = "";
  contenedor.className = "card";

  for (let i = 1; i <= n; i++) {
    const fila = document.createElement("div");
    fila.className = "fila-estudiante";

    const titulo = document.createElement("span");
    titulo.className = "nombre-estudiante";
    titulo.textContent = "Estudiante " + i;

    const label1 = document.createElement("label");
    label1.textContent = "Nota 1:";
    const input1 = document.createElement("input");
    input1.type = "number";
    input1.min = "0";
    input1.max = "100";
    input1.id = "nota-" + i + "-1";

    const label2 = document.createElement("label");
    label2.textContent = "Nota 2:";
    const input2 = document.createElement("input");
    input2.type = "number";
    input2.min = "0";
    input2.max = "100";
    input2.id = "nota-" + i + "-2";

    const label3 = document.createElement("label");
    label3.textContent = "Nota 3:";
    const input3 = document.createElement("input");
    input3.type = "number";
    input3.min = "0";
    input3.max = "100";
    input3.id = "nota-" + i + "-3";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Calcular";
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", function() {
      const idx = this.getAttribute("data-index");
      calcularNotaEstudiante(idx);
    });

    const resultado = document.createElement("span");
    resultado.className = "resultado-estudiante";
    resultado.id = "resultado-" + i;
    resultado.textContent = "—";

    fila.appendChild(titulo);
    fila.appendChild(label1);
    fila.appendChild(input1);
    fila.appendChild(label2);
    fila.appendChild(input2);
    fila.appendChild(label3);
    fila.appendChild(input3);
    fila.appendChild(btn);
    fila.appendChild(resultado);
    contenedor.appendChild(fila);
  }
}

function calcularNotaEstudiante(i) {
  const n1 = parseInt(document.getElementById("nota-" + i + "-1").value);
  const n2 = parseInt(document.getElementById("nota-" + i + "-2").value);
  const n3 = parseInt(document.getElementById("nota-" + i + "-3").value);
  const resultado = document.getElementById("resultado-" + i);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.textContent = "—";
  } else if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
    resultado.textContent = "Error: notas no estan dentro del parametro establecido";
  } else {
    const notas = [n1, n2, n3].sort(function(a, b) { return a - b; });
    resultado.textContent = notas[1];
  }
}