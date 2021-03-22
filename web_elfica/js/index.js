let state = false;
const sections = ["p1", "p2", "p3", "p4", "p5"];
let search;
let show;


const handleMenuShow = (value) => {

  let display;
  let card_menu = document.getElementById("card_menu");
  display = card_menu.style.display;


  !value ?
    card_menu.style.display = "none"
    :
    card_menu.style.display = "block"

  state = value;
}

const handleMenu = () => {
  const widthScreen = window.innerWidth

  if (widthScreen <= 890) {
    handleMenuShow(!state)
  }
}


const handleSections = (nav) => {



  for (let i = 0; i < sections.length; i++) {
    search = document.getElementById(sections[i]);
    show = search.style.display;


    if (show == "block") {
      search.style.display = "none"
      if (nav == "next") {
        i++;
        if (i > (sections.length - 1)) i = 0;
      }

      if (nav == "prev") {
        i--;
        if (i < 0) i = 4;
      }

      search = document.getElementById(sections[i]);
      search.style.display = "block";
      return;
    }

  }

}

const navSection = (nav) => {
  for (let i = 0; i < sections.length; i++) {
    search = document.getElementById(sections[i]);
    search.style.display = "none"


    if (sections[i] == nav) {
      search.style.display = "block";
      // return;
    }

  }
}



const handleFormMessge = (status) => {
  const form = document.getElementById("cntr_form")
  form.style.display = status;
}



const handleArrowDown = () => {
  const div = document.getElementById("arrow")
  div.style.transform = "rotateX(180deg)"

  // div.innerHTML = codigo
}


const handleArrowUp = () => {
  const div = document.getElementById("arrow")
  div.style.transform = "rotateX(360deg)"
}