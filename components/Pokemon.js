export function Pokemon(pokemon, abilities) {
  console.log({ pokemon, abilities });
  const name = pokemon.name;
  const id = pokemon.id;
  const english_description = abilities.effect_entries.find(
    (effect_entry) => effect_entry.language.name === "en"
  );
  const description = english_description.effect;
  const types = pokemon.types.map((item) => item.type.name).join(", ");
  const attack = pokemon.stats[1].base_stat;
  const speed = pokemon.stats[5].base_stat;
  const defense = pokemon.stats[2].base_stat;
  const move_names = pokemon.moves.map(({ move }) => move.name);

  console.log(move_names);

  const moves_cards = `<div class="d-flex flex-wrap mt-5" >

 ${move_names.map(
   (name) => `<div>
   <span class="badge bg-secondary text-white mx-2">
${name}
</span>
 </div>`
 )}
 
 
 
 
 </div>`;

  console.log({ id, name });
  // console.log(JSON.stringify(pokemon.abilities));
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  return `
      <div class="row">
          <h4>Description</h4>
          <p class="mb-4">${description}</p>
      </div>
      <div class="row">
          <div class="col-md-6 col-sm-12">
              <img src="${image}" id="foto" class="card-img-top" Height-200px  alt="${
    pokemon.original_title
  }" />
          </div>
      <div class="col-md-6 col-sm-12">
          <div class="d-flex align-items-center justify-content-between">
              <h3 class="text-uppercase">${pokemon.name}</h3>
          <div>
              <button class="btn btn-sm btn-outline-danger" id="add-to-favourites">
                  <i class="bi bi-heart"></i>
              </button>
          </div>
          </div>
  
          <table class="table">
              <tbody>
                  <tr>
                      <td>Weight</td>
                      <td>${pokemon.weight}</td>
                  </tr>
                  <tr>
                      <td>Height</td>
                      <td>${pokemon.height}</td>
                  </tr>
                  <tr>
                      <td>types</td>
                      <td>${types}</td>
                  </tr>
  
                  <tr>
                      <td>attack</td>
                      <td>${attack}</td>
                  </tr>
                  <tr>
                      <td>defense</td>
                      <td>${defense}</td>
                  </tr>
                  <tr>
                      <td>speed</td>
                      <td>${speed}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>

      ${moves_cards.split(",").join(" ")}
    
      `;
}
