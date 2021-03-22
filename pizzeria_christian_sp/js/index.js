const handleIframe = (name) => {
  const iframe = document.getElementById("iframe");
  iframe.setAttribute("src", `${name}.html`);
};