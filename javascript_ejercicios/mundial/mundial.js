function generarInputs() {
  const n = parseInt(document.getElementById("numPartidos").value);

  if (isNaN(n) || n < 1 || n > 100) {
    alert("Ingresa un número entre 1 y 100.");
    return;
  }

  const contenedor = document.getElementById("contenedorPartidos");
  contenedor.innerHTML = "";
  contenedor.className = "card";

  for (let i = 1; i <= n; i++) {
    const fila = document.createElement("div");
    fila.className = "fila-partido";

    const titulo = document.createElement("span");
    titulo.className = "nombre-partido";
    titulo.textContent = "Caso " + i;

    const labelBrasil = document.createElement("label");
    labelBrasil.textContent = "Goles Brasil:";
    const inputBrasil = document.createElement("input");
    inputBrasil.type = "number";
    inputBrasil.min = "0";
    inputBrasil.id = "brasil-" + i;

    const labelColombia = document.createElement("label");
    labelColombia.textContent = "Goles Colombia:";
    const inputColombia = document.createElement("input");
    inputColombia.type = "number";
    inputColombia.min = "0";
    inputColombia.id = "colombia-" + i;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Calcular";
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", function() {
      const idx = this.getAttribute("data-index");
      calcularResultado(idx);
    });

    const resultado = document.createElement("span");
    resultado.className = "resultado-partido";
    resultado.id = "resultado-" + i;
    resultado.textContent = "—";

    fila.appendChild(titulo);
    fila.appendChild(labelBrasil);
    fila.appendChild(inputBrasil);
    fila.appendChild(labelColombia);
    fila.appendChild(inputColombia);
    fila.appendChild(btn);
    fila.appendChild(resultado);
    contenedor.appendChild(fila);
  }
}

function calcularResultado(i) {
  const brasil = parseInt(document.getElementById("brasil-" + i).value);
  const colombia = parseInt(document.getElementById("colombia-" + i).value);
  const resultado = document.getElementById("resultado-" + i);

  if (isNaN(brasil) || isNaN(colombia)) {
    resultado.textContent = "—";
    return;
  }

  if (colombia > brasil) {
    resultado.textContent = "ganamos";
  } else if (brasil > colombia) {
    resultado.textContent = "perdimos";
  } else {
    resultado.textContent = "casi ganamos";
  }
}