let myCarrito = JSON.parse(sessionStorage.getItem("carrito")) || {};
let totalPedido = sessionStorage.getItem("totalPedido");
let tuPedido = `
<div class="cntr-cards">
  <h1>Tu pedido: </h1>
  <article>
    <ul>
      ${Object.keys(myCarrito)
    .map(
      (key) =>
        `<li>${key} &#10146;<span class="price">${myCarrito[key]}</span></li></br>`
    )
    .join(" ")}
    </ul>
        <div class="ctnr-confirmar">
          <button onclick="fotoHomerPizza()">Confirmar</button>
          <b>Total</b>: &#10146; <span> ${JSON.parse(totalPedido) || 0
  } €</span>
        </div>
  </article>
  </div>
  <a href="pedido.html">
    <button onclick="removeSession()" class="decoracion">
      Volver
    </button>
  </a>
  `;

const removeSession = () => {
  return sessionStorage.clear();
};

const fotoHomerPizza = () => {
  document.querySelector(".cntr-cards").style.display = "none";
  let fotoHomer = `
  <div class="decoracion"></div>
  <div class=cntr-homer-pizza>
      <img src="img/pizzaHomer.jpg" alt="pizzaHomer" />
      <h1 class="h1-homer">Disfruta nuestras pizzas !!!</h1>
  </div>
  <a href="inicio.html">
    <button onclick="removeSession()" class="decoracion">
      <img src="img/casa.png" alt="casa" class="img-casa"/>
    </button>
   </a>
  `;
  document.body.innerHTML = fotoHomer;
};

document.body.innerHTML = tuPedido;