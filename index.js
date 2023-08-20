const pokemonArray = [];

function generatePokemonCards() {
  const container = document.getElementById("pokemonCardsContainer");

  pokemonArray.forEach((pokemon, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col-md-3", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = pokemon.image;
    img.classList.add("card-img-top");
    img.alt = pokemon.name;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = pokemon.name;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = pokemon.description;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardDiv.appendChild(card);

    container.appendChild(cardDiv);
  });
}

