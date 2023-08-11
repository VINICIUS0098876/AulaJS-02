'use strict'

const forma1 = document.getElementById('forma1')

function mudarCor(){
    forma1.classList.toggle('vermelho')

}

forma1.addEventListener('click', mudarCor)


const forma2 = document.getElementById('forma2')

function mudarForma(){
    forma2.classList.toggle('circulo')
    forma2.classList.toggle('vermelho')
}

forma2.addEventListener('click', mudarForma)
/* PROFESSOR */
/*-----------------------------------------------------------------------------------------------*/
/* Vinicius -> Aluno */
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

/* Forma 3 */
function mudarImagem(){
    forma3.classList.toggle('img')
}
forma3.addEventListener('click', mudarImagem)
/* Forma 4 */
function mudarX(){
    forma4.classList.toggle('x')
    forma4.classList.toggle('vermelho')
}
forma4.addEventListener('click', mudarX)
/* Forma 5 */
function mudarLink(){
    forma5.classList.toggle('tw')
    forma5.classList.toggle('vermelho')
}
forma5.addEventListener('click', mudarLink)
/* Forma 6 */
function mudarRota(){
    forma6.classList.toggle('girar')
    forma6.classList.toggle('vermelho')
}
forma6.addEventListener('click', mudarRota)
/* Forma 7 */
function mudarJump(){
    forma7.classList.toggle('pular')
    forma7.classList.toggle('vermelho')
}
forma7.addEventListener('click', mudarJump)
/* Forma 8 */
function mudarFlip(){
    forma8.classList.toggle('flip')
    forma8.classList.toggle('vermelho')
}
forma8.addEventListener('click', mudarFlip)
/* -------------------------------------------------------------------------------------------*/
