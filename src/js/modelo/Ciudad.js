let ciudad = document.querySelector(".ciudad");
let teatro = document.querySelector(".teatro");
let medellin = document.querySelector(".medellin");
let bogota = document.querySelector(".bogota");
let ciudadElegida = document.querySelector(".ciudadElegida");



let url = document.location.href;
url = url.split("?")
ciudad.textContent=url[1]
teatro.textContent=url[2]