function generarSelects() {
  const n = parseInt(document.getElementById("numJuegos").value);

  if (isNaN(n) || n < 1 || n > 100) {
    alert("Por favor ingresa un número entre 1 y 100.");
    return;
  }

  const contenedor = document.getElementById("contenedorSelects");
  contenedor.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    const label = document.createElement("label");
    label.textContent = `Juego ${i}: `;

    const select = document.createElement("select");
    select.id = `juego-${i}`;

    const opciones = ["ALICE", "BOB", "EMPATE"];
    opciones.forEach((op) => {
      const option = document.createElement("option");
      option.value = op;
      option.textContent = op;
      select.appendChild(option);
    });

    label.appendChild(select);
    contenedor.appendChild(label);
    contenedor.appendChild(document.createElement("br"));
  }

  // Mostrar botón calcular
  const contenedorCalcular = document.getElementById("contenedorCalcular");
  contenedorCalcular.innerHTML = "";

  const btnCalcular = document.createElement("button");
  btnCalcular.textContent = "Calcular";
  btnCalcular.onclick = () => calcularGanador(n);
  contenedorCalcular.appendChild(btnCalcular);
}

function calcularGanador(n) {
  let puntosAlice = 0;
  let puntosBob = 0;

  for (let i = 1; i <= n; i++) {
    const valor = document.getElementById(`juego-${i}`).value;

    if (valor === "ALICE") {
      puntosAlice += 2;
    } else if (valor === "BOB") {
      puntosBob += 2;
    } else if (valor === "EMPATE") {
      puntosAlice += 1;
      puntosBob += 1;
    }
  }

  let resultado;

  if (puntosAlice > puntosBob) {
    resultado = "ALICE";
  } else if (puntosBob > puntosAlice) {
    resultado = "BOB";
  } else {
    resultado = "EMPATE";
  }

  alert(resultado);
}