//variáveis
let randomNumber = Math.round(Math.random() * 10)
const frases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida."
]

//eventos
document.querySelector("#abrirBiscoito").addEventListener('click', abrirBiscoito)
document.querySelector("#abrirOutroBiscoito").addEventListener('click', abrirOutroBiscoito)

//funções
function abrirBiscoito(event) {
  toggleScreen()   
  document.querySelector(".screen2 p").innerText = frases[randomNumber]
}

function abrirOutroBiscoito() {
  randomNumber = Math.round(Math.random() * 10)
  toggleScreen()     
}

function toggleScreen() {
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}