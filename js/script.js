//forEach and IIFE
//IIFE starts with the first function()
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40';

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
          height: item.height,
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
    item.types = [];
    for (var i = 0; i < details.types.length; i++) {
      item.types.push(details.types[i].type.name);
    }
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function() {
  showModal(pokemon); //pass the entire object
  });
}

//Modal
//show
function showModal(pokemon) {
//get DOM element
  let modalContainer = document.querySelector('#modal-container');
//clear existing modal content - do I need this?
  modalContainer.innerHTML = ('');
//create nodes
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let indentifier = document.createElement('h2');
  //indentifier.classList.add('show-modal')
  indentifier.innerText = pokemon.name;

  let image = document.createElement('img');
  image.classList.add('poke-img');
  image.src = pokemon.imageUrl;

  let height = document.createElement('p');
  height.innerText = "height: " + pokemon.height + " m";

  let type = document.createElement('p');
  type.innerText = "type: " + pokemon.types;

  modal.appendChild(indentifier);
  modal.appendChild(image);
  modal.appendChild(height);
  modal.appendChild(type);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');


//close modal by clicking outside of it
  modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
   console.log(target);
});
}

//hide
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

//close modal with esc
window.addEventListener('keydown', (e) => {
  let modalContainer =document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

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


