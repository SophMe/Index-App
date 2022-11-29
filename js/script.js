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
//create list of Pokémons as button within div .list-group
  let list = $('.list-group');
  let listItem = $('<li></li>');
  let listButton = $('<button type="button" data-target="modal-container" data-toggle="modal" class="btn btn-primary">' + pokemon.name + '</button>');

  list.append(listItem);
  listItem.append(listButton);
  listItem.addClass('group-list-item');

//event listener  
  listButton.on('click', function(event){
    showDetails(pokemon);
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
  showModal(pokemon); //passes the entire object
  });
}

//Modal
//show
function showModal(pokemon) {

//assign info to modal elements
  let modalTitle = $('.modal-title');
  let modalBody = $('.modal-body');
  modalTitle.empty();
  modalBody.empty();

  let identifier = $('<p>' + pokemon.name + '</p>');
  let image = $('<img class="poke-img" scr="pokemon.imageUrl" />');
  let type = $('<p>' + 'type: ' + pokemon.types + '</p>');
  let height = $('<p>' + 'height: ' + pokemon.height + ' m' + '</p>');

  modalTitle.append(identifier);
  modalBody.append(image);
  modalBody.append(type);
  modalBody.append(height); 
}

//information that is returned is accessible from outside the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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

