const input = document.querySelectorAll("input")
const erro = document.querySelectorAll(".erro")
const valid = document.querySelector("#validAll")
const button = document.querySelector("#btn")
const buttonColor = button.style.backgroundColor
const erroColor = valid.style.color

input.forEach(function(element, index) {
  element.addEventListener("click", ()=> {
  element.addEventListener("input", () => {
  if (element.value == '') {
    erro[index].innerHTML = "Campo obrigatorio" 
    verifica()
  }
  else {
    erro [index].innerHTML = ''
    verifica()
  }
  })
  })
})

function verifica() {
  let arrvalida = new Array()
  for ( i = 0; i < input.length; i++) {
    if (input[i].value != "") {
      arrvalida.push (input[i].value)
    } 
  }
  if (arrvalida.length != input.length) {
    valid.innerHTML = "Todos os campos devem estar preenchidos"
    button.setAttribute("disabled", "")
    button.style.backgroundColor = "#afafaf"

    valid.style.color = erroColor

  } else {
    valid.innerHTML = "Sucesso"
    button.removeAttribute ("disabled")
    button.style.backgroundColor = buttonColor
    valid.style.color = "#0F7B0F"
  }
}

