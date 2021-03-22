const circulo = (r) => {

  const circunferencia = 2 * Math.PI * r;
  const area = Math.PI * Math.pow(r, 2);

  document.getElementById("c-value").value = circunferencia;
  document.getElementById("a-value").value = area;

};


const rectangulo = (b, a) => {

  const perimetro = 2 * (Number(b) + Number(a));
  const area = b * a;

  document.getElementById("p-r-value").value = perimetro;
  document.getElementById("a-r-value").value = area;

}

const cuadrado = (l) => {

  const perimetro = Math.pow(l, 2);
  const area = 4 * l;

  document.getElementById("p-c-value").value = perimetro;
  document.getElementById("a-c-value").value = area;

}

const triangulo = (b, a, c) => {

  const perimetro = Number(a) + Number(b) + Number(c);
  const s = perimetro / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  document.getElementById("p-t-value").value = perimetro;
  document.getElementById("a-t-value").value = area;

}

const borrar = () => {
  const inputs = document.getElementsByClassName("input");
  for (let element of inputs) {
    element.value = "";
  }
}