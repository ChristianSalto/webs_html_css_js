const productos = {
  "c-0": "haw",
  "c-1": "carbo",
  "c-2": "bar",
  "c-3": "pepe",
  "c-4": "pata",
  "c-5": "veg",
  "c-6": "coca",
  "c-7": "fanta-n",
  "c-8": "fanta-l",
  "c-9": "cerve",
  "c-10": "hela",
  "c-11": "brown",
  "c-12": "tarta",
};

let myCarrito = {};

const handleForm = () => {
  let totalBill = 0;
  for (let keys in productos) {
    totalBill += handleBill(productos[keys], keys);
  }

  sessionStorage.setItem("totalPedido", JSON.stringify(totalBill.toFixed(2)));
  document.getElementById("total").innerHTML = totalBill.toFixed(2) + " €";
};

const handleBill = (id, amount) => {
  const elemntInputNumber = document.getElementById(amount);
  const elementCheckBox = isChecked(document.getElementById(id));

  const total = Number(elemntInputNumber.value) * elementCheckBox;


  if (elementCheckBox !== 0 && elemntInputNumber.value !== "") {
    let producto = document.getElementById(id).name;
    myCarrito[producto] = `${elemntInputNumber.value} &#10146; ${total}`;
    document.getElementById("spn-carrito").innerHTML = 1;
    sessionStorage.setItem("carrito", JSON.stringify(myCarrito));
  }


  return total;
};

const isChecked = (element) => {
  return element.checked ? Number(element.value) : 0;
};


const handleDiscount = () => {
  let totalBillDiscount = JSON.parse(sessionStorage.getItem("totalPedido"));
  const iframe = document.getElementById("iframe");
  const msj = iframe.contentWindow.document.querySelector(".h3-msj")


  if (totalBillDiscount > 50) {
    totalBillDiscount -= totalBillDiscount * 30 / 100;
    iframe.contentWindow.document.getElementById("total").innerHTML = totalBillDiscount.toFixed(2) + " €";
    sessionStorage.setItem("totalPedido", JSON.stringify(totalBillDiscount.toFixed(2)));
    return msj.innerHTML = "se le aplico un descuento del 30% a su pedido."
  }

  return msj.innerHTML = "No se pudo aplicar el decuento, solo para pedidos +50€"
}