function generarInputs() {
  const n = parseInt(document.getElementById("numCasos").value);

  if (isNaN(n) || n < 1 || n > 100) {
    alert("Ingresa un número entre 1 y 100.");
    return;
  }

  const contenedor = document.getElementById("contenedorCasos");
  contenedor.innerHTML = "";
  contenedor.className = "card";

  for (let i = 1; i <= n; i++) {
    contenedor.innerHTML += `
      <div class="bloque-caso">
        <span class="nombre-caso">Caso ${i}</span>
        <div class="fila-cuadros">
          <span class="label-grupo">Conector</span>
          <div class="grupo-cuadros">
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-1" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-2" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-3" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-4" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-5" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="c${i}-6" placeholder="0/1" />
          </div>
          <span class="label-grupo">Tomacorriente</span>
          <div class="grupo-cuadros">
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-1" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-2" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-3" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-4" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-5" placeholder="0/1" />
            <input type="number" min="0" max="1" class="cuadro" id="t${i}-6" placeholder="0/1" />
          </div>
          <button type="button" onclick="calcular(${i})">Calcular</button>
          <span class="resultado-caso" id="resultado-${i}">—</span>
        </div>
      </div>
    `;
  }
}

function calcular(i) {
  const c = [1,2,3,4,5,6].map(j => parseInt(document.getElementById("c" + i + "-" + j).value));
  const t = [1,2,3,4,5,6].map(j => parseInt(document.getElementById("t" + i + "-" + j).value));
  const res = document.getElementById("resultado-" + i);

  if (c.some(isNaN) || t.some(isNaN)) {
    res.textContent = "Error: completa todos los campos";
    return;
  }

  if (c.some(v => v !== 0 && v !== 1) || t.some(v => v !== 0 && v !== 1)) {
    res.textContent = "Error: solo se permiten valores 0 o 1";
    return;
  }

  res.textContent = c.every((v, j) => v + t[j] === 1) ? "COMPATIBLE" : "INCOMPATIBLE";
}