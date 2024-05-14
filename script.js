const btn = document.getElementById('btnCalcular')
const calculadora = document.querySelector(".container-calculadora")
const containerResultado = document.querySelector(".container-resultado")
const resultado = document.getElementById('resultado')

const magreza = document.getElementById('1')
const normal = document.getElementById('2')
const sobrepeso = document.getElementById('3')
const obsidade = document.getElementById('4')
const obsidade2 = document.getElementById('5')

btn.addEventListener('click', function() {
    const h = document.getElementById('altura').value
    const p = document.getElementById('peso').value
    const imc = p/(h*h)
    

    if (imc < 18.5) {

        calculadora.classList.toggle("ocultar")
        containerResultado.classList.toggle("mostrar")

        resultado.innerText = "Seu IMC:" +" "+ imc.toFixed(2)
        magreza.style.backgroundColor = "#80F288"
        magreza.style.color = "#333333"

    }  else if (imc >= 18.5 && imc <= 24.9) {
        
        calculadora.classList.toggle("ocultar")
        containerResultado.classList.toggle("mostrar")

        resultado.innerText = "Seu IMC:" +" "+ imc.toFixed(2)
        normal.style.backgroundColor = "#80F288"
        normal.style.color = "#333333"

    } else if (imc >= 25.0 && imc <= 29.9) {
        
        calculadora.classList.toggle("ocultar")
        containerResultado.classList.toggle("mostrar")

        resultado.innerText = "Seu IMC:" +" "+ imc.toFixed(2)
        sobrepeso.style.backgroundColor = "#80F288"
        sobrepeso.style.color = "#333333"

    } else if (imc >= 30.0 && imc <= 39.9) {
        
        calculadora.classList.toggle("ocultar")
        containerResultado.classList.toggle("mostrar")

        resultado.innerText = "Seu IMC:" +" "+ imc.toFixed(2)
        obsidade.style.backgroundColor = "#80F288"
        obsidade.style.color = "#333333"

    } else if (imc >= 40.0) {
        
        calculadora.classList.toggle("ocultar")
        containerResultado.classList.toggle("mostrar")

        resultado.innerText = "Seu IMC:" +" "+ imc.toFixed(2)
        obsidade2.style.backgroundColor = "#80F288"
        obsidade2.style.color = "#333333"

    }

})