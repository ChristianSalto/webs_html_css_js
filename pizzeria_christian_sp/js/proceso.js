let contador = 0;
const handleProcess = () => {
  const fotos = ["masa.jpg", "tomate.jpg", "ingrediente.jpg", "horno.jpg"];
  contador = contador + 1;
  if (contador > 3 || contador < 0) contador = 0;
  const img = document.querySelector(".fotoProcesos");
  img.setAttribute("src", `img/${fotos[contador]}`);
};