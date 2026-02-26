const nupp = document.querySelector("#nupp")
const fakt = document.querySelector("#fakt")

async function getFakt() {
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
  const data = await response.json()
  fakt.innerText = data.text
}

nupp.addEventListener("click", function() {
  getFakt()
})