export function Pokemons(pokemons, favs = false) {
  let pokemons_html = `<div class="row">`;

  pokemons.forEach(({ name, url, id }) => {
    const pokemonId = favs ? id : url.split("/").slice(-2, -1)[0]; // Extract the Pokemon ID from the URL
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

    pokemons_html += `
    <div class="col-lg-3 col-md-6 mb-4 mt-5 position-relative">
    
    <a class="text-decoration-none" href="pokemon.html?id=${pokemonId}">
      <div class="card h-100 shadow rounded pt-5">
        <img
          src="${pokemonImage}"
          class="w card-img-top"
          alt="Pokemon 1"
          style="max-height: 200px"
        />
        <button class="position-absolute btn btn-danger ${
          !favs ? "d-none" : ""
        } delete-button" style="top: 5px; right: 20px; z-index: 1;" data-pokemon-id="${pokemonId}">
          <i class="bi bi-trash"></i>
        </button>  
        <div
          class="card-body d-flex justify-content-center align-items-end"
          style="height: 100px"
        >
          <h5 class="card-title text-uppercase" >${name}</h5>
        </div>
      </div>
    </a>
  </div>
    `;
  });

  pokemons_html += `</div>`;
  return pokemons_html;
}

export function Pokemon(pokemonId, name) {
  let pokemons_html = `<div class="row">`;

  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  pokemons_html += `
    <div class="col-lg-3 col-md-6 mb-4 mt-5">
    <a class="text-decoration-none" href="pokemon.html?id=${pokemonId}">
      <div class="card h-100 shadow rounded pt-5">
        <img
          src="${pokemonImage}"
          class="w card-img-top"
          alt="Pokemon 1"
          style="max-height: 200px"
        />
        <div
          class="card-body d-flex justify-content-center align-items-end"
          style="height: 100px"
        >
          <h5 class="card-title text-uppercase" >${name}</h5>
        </div>
      </div>
    </a>
  </div>
    `;

  pokemons_html += `</div>`;
  return pokemons_html;
}

async function getPokemonDescription(url) {
  console.log({ url });
  await fetch(url)
    .then((res) => res.json())
    .then((data) => console.log({ data }));
}
