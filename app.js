const cuadrado = document.querySelector(".box")
const boton = document.getElementById("btn")

let reproduction = false 
boton.addEventListener("click",()=>{
    if(!reproduction){
        boton.textContent = "❚❚"
        reproduction = true
        cuadrado.classList.add("box-animacion")
    } else {
        boton.textContent = "▶"
        reproduction = false
        cuadrado.classList.remove("box-animacion")
    }
})

