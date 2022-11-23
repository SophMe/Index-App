//forEach and IIFE
//IIFE starts with the first function()
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//"The IIFE returns an object with two keys: add and getAll. 
//This means that, whenever you access pokemonRepository somewhere in your app, it will represent an object with these two keys."
//Two seperate functions
  function getAll () {
    return pokemonList;
  }

//typeof object as condition to add
function add(pokemon) {
    if (typeof pokemon === "object"){
      pokemonList.push(pokemon);
  } else {console.log("There is something wrong with this Pokémon.")};
}  

function addListItem(pokemon) {
  //DOM manipulation
  let unorderedList = document.querySelector('ul');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('listButton');
  listItem.appendChild(button);
  unorderedList.appendChild(listItem);
//event listener  
  button.addEventListener('click', function(event){
    showDetails(pokemon)
  });
}

//PROMISE with .then function after fetch for loading the API
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

//Details
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
// Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function() {
  console.log(pokemon.name); 
  });
}

//Modal
//get DOM element
let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) {
  //clear existing modal content - do I always need this?
  modalContainer.innerHTML = (' ');
  let modal = document.createElement('div');
  modal.classList.add('modal');
  let indentifier = document.createElement('h2');
  indentifier.innerText = 'pokemon.name';

  modal.appendChild(indentifier);
  modal.appendChild(modal);
}

//information that is returned is accessible from outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

//Closing brackets of IIFE
}
  ) ();

//forEach
//The function(pokemon) is passed as a parameter to the forEach() function:
//my array.forEach(function(property){action(key.property)});
pokemonRepository.loadList().then(function() {
// Now the data is loaded
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


