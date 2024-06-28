const tombolone = document.getElementById("tombolone");
const btnEstrai = document.getElementById("estrai");
const btnReset = document.getElementById("reset");
const numeriEstratti = [];

window.addEventListener("load", init);

function init() {
  creaTabellone();
}

// creo la funzione per creare il tabellone e i numeri
function creaTabellone() {
  for (i = 1; i <= 90; i++) {
    const casella = document.createElement("div");
    const myText = document.createElement("span");
    myText.innerText = i;
    myText.classList.add("numeri");
    casella.classList.add("caselle");
    casella.appendChild(myText);
    tombolone.appendChild(casella);
  }
}

// numeri estratti
btnEstrai.addEventListener("click", function () {
  estract();
});

btnReset.addEventListener("click", function () {
  const tabellone = document.querySelectorAll(".caselle");
  tabellone.forEach((casella) => {
    casella.classList.remove("estratto");
  });
  document.getElementById("estratto").innerText = "";
});

// funzione per estrarre i numeri da 1-90
function estract() {
  let numeroEstratto = Math.floor(Math.random() * 90 + 1);
  if (numeriEstratti.includes(numeroEstratto)) {
    estrai();
  } else {
    document.getElementById("estratto").innerText =
      "Numero estratto: " + numeroEstratto;
    numeriEstratti.push(numeroEstratto);
    colorato(numeroEstratto);
  }
}

function colorato(numeroEstratto) {
  const tabellone = document.querySelectorAll(".caselle");
  for (let i = 0; i < tabellone.length; i++) {
    if (pareseint(tabellone[i].innerText) === numeroEstratto) {
      tabellone[i].classList.add('estratto');
    }
  }
}
