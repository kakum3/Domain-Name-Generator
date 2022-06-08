/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generadorDominio(parte1, parte2, parte3) {
    for (let a = 0; a < parte1.length; a++) {
      for (let b = 0; b < parte2.length; b++) {
        for (let c = 0; c < parte3.length; c++) {
          let nuevoNombre = document.createTextNode(
            parte1[a] + parte2[b] + parte3[c] + ".com"
          );
          let lista = document.getElementById("listaDominios");
          let elemento = document.createElement("div");
          elemento.className = "alert alert-dark";
          lista.appendChild(elemento);
          elemento.appendChild(nuevoNombre);
          let seleccionador = document.createElement("input");
          seleccionador.className = "form-check-input";
          seleccionador.setAttribute("type", "radio");
          seleccionador.setAttribute("name", "opcion");
          seleccionador.setAttribute("value", nuevoNombre.textContent);
          elemento.appendChild(seleccionador);
        }
      }
    }
    const selectores = document.querySelectorAll("input");
    for (let i = 0; i < selectores.length; i++) {
      selectores[i].addEventListener("input", function() {
        if (selectores[i].checked) {
          let elegido = selectores[i].value;
          let titulo = document.querySelector("#titulo");
          titulo.innerHTML = elegido;
        }
      });
    }
  }
  document.querySelector("#boton").addEventListener("click", function() {
    generadorDominio(pronoun, adj, noun);
    document.querySelector("#boton").style.display = "none";
  });
};
