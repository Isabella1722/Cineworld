


let contenedorModal = document.querySelector(".modalContenedor")
let modal = document.querySelector(".modal")




palabra.addEventListener("click", function () {
    modal.classList.add("open")
    contenedorModal.classList.add("open")

})

document.addEventListener("click", function (event) {
   if(event.target==botonSalir){
    modal.classList.remove("open")
    contenedorModal.classList.remove("open")
   }


})


