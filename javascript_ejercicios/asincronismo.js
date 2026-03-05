function ejercicio1() {
  const segundos = parseInt(document.getElementById("input1").value);

  if (isNaN(segundos) || segundos <= 0) {
    alert("Por favor ingresa un número válido de segundos.");
    return;
  }

  const ms = segundos * 1000;
  setTimeout(() => {
    alert(`¡Han pasado ${segundos} segundo(s)!`);
  }, ms);

  console.log(`Ejercicio 1: Alert programado para ${segundos} segundo(s).`);
}

function crearPromesa(tiempoBase, id) {
  const aleatorio = Math.floor(Math.random() * 101); // 0 a 100 ms
  const tiempoTotal = tiempoBase + aleatorio;
  console.log(`Promesa ${id}: tiempo base=${tiempoBase}ms + aleatorio=${aleatorio}ms = ${tiempoTotal}ms`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        tiempoBase,
        aleatorio,
        tiempoTotal,
      });
    }, tiempoTotal);
  });
}

async function ejercicio2() {
  const segundos = parseFloat(document.getElementById("input2").value);

  if (isNaN(segundos) || segundos <= 0) {
    alert("Por favor ingresa un número válido de segundos.");
    return;
  }

  const tiempoBaseMs = segundos * 1000;
  console.log(`\nEjercicio 2: Creando 3 promesas con tiempo base ${tiempoBaseMs}ms...`);
  const resultado = document.getElementById("resultado2");
  resultado.textContent = "Esperando las 3 promesas...";
  const [r1, r2, r3] = await Promise.all([
    crearPromesa(tiempoBaseMs, 1),
    crearPromesa(tiempoBaseMs, 2),
    crearPromesa(tiempoBaseMs, 3),
  ]);

  const texto = `
Promesa 1 resuelta en ${r1.tiempoTotal}ms (base: ${r1.tiempoBase}ms + aleatorio: ${r1.aleatorio}ms)
Promesa 2 resuelta en ${r2.tiempoTotal}ms (base: ${r2.tiempoBase}ms + aleatorio: ${r2.aleatorio}ms)
Promesa 3 resuelta en ${r3.tiempoTotal}ms (base: ${r3.tiempoBase}ms + aleatorio: ${r3.aleatorio}ms)
  `.trim();

  console.log(texto);
  resultado.textContent = texto;
}
