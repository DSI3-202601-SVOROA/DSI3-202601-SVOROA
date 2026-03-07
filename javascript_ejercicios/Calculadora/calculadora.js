const ponderaciones = [0.05, 0.10, 0.10, 0.10, 0.15, 0.15, 0.15, 0.20];

function calcular() {
  const notas = [1,2,3,4,5,6,7,8].map(i => parseFloat(document.getElementById("n" + i).value));
  const res = document.getElementById("resultado");

  if (notas.some(isNaN)) {
    res.textContent = "Error: completa todas las notas.";
    return;
  }

  if (notas.some(n => n < 0 || n > 5)) {
    res.textContent = "Error: las notas deben estar entre 0 y 5.";
    return;
  }

  const final = notas.reduce((suma, nota, i) => suma + nota * ponderaciones[i], 0);
  res.textContent = "Nota final: " + final.toFixed(2);
}