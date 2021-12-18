const house = document.getElementById("house");
const decorator = document.getElementById("decorator");
decorator.addEventListener("click", deckTheHalls);

function deckTheHalls() {
 house.textContent = decorator.checked ? "️️️️️️️️️️️️️️️️️🎄🎁☃️🏡☃️🎁🎄" : "🏡";
}
