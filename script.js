const nupp = document.querySelector("#nupp")
const fakt = document.querySelector("#fakt")

async function getFakt() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
  const data = await response.json()
  fakt.innerText = data.text
}

nupp.addEventListener("click", function() {
  getFakt()
})