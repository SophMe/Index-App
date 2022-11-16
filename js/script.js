//forEach and IIFE
//next line is IIFE function, with an array (pokemonList) in the curly brackets 
let pokemonRepository = (function () {

//name is a string
//height is a number
//types is an array of strings
//hitpoints is a number
  let pokemonList = [
    {name: "Bulbasaur", 
    height: 0.7, 
    types:['grass', 'poison'],
    hitpoints: 45},
    
    {name: "Pikachu", 
    height: 0.4, 
    types:'electric',
    hitpoints: 35},
    
    {name: "Charizad", 
    height: 1.7, 
    types:['fire', 'flying'],
    hitpoints: 78},
   
   {name: "Beedrill", 
    height: 1, 
    types:['bug', 'poison'],
    hitpoints: 65}
    ];

//"The IIFE returns an object with two keys: add and getAll. 
//This means that, whenever you access pokemonRepository somewhere in your app, it will represent an object with these two keys."
//Two seperate functions
  function getAll () {
    return pokemonList;
  }

//  function add (pokemon) {
//    pokemonList.push(pokemon);
//  }

//typeof object as condition to add
  function add(pokemon) {
    if (typeof pokemon === "object"){
      pokemonList.push(pokemon);
  } else (console.log("There is something wrong with this Pokémon."));  

//information that is returned is accessible from outside the IIFE
  return {
    add: add,
    getAll: getAll
  };

//Closing brackets of IIFE
}
  ) ();

//forEach
//The function(pokemon) is passed as a parameter to the forEach() function:
//my array.forEach(function(property){action(key.property)}); 
//pokemonList.forEach(function(pokemon) {
//  document.write(pokemon.name);
//});

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log("pokemon:", pokemon.name)
});

//console.log(pokemonRepository.getAll());
//document.write(pokemonRepository.getAll());



