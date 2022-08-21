const container = document.getElementById("container");
const count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function fetchPokemons() {
  for (let i = 1; i <= count; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createCard(data);
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("pokemon");

  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const id = data.id.toString().padStart(3, "0");
  const types = data.types.map((type) => type.type.name);
  const type = types[0];
  console.log(type);

  card.innerHTML = `<div class="img-container">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      data.id
    }.png"
    alt="${name}"
  />
  </div>
  <div class="info">
  <span class="number">#${id}</span>
  <h3 class="name">${name}</h3>
  <small class="type">Type: <span>${
    type[0].toUpperCase() + type.slice(1)
  }</span></small>
  </div>`;

  card.style.backgroundColor = `${colors[type]}`;

  container.appendChild(card);
}

fetchPokemons();
