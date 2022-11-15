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

//"The IIFE returns an object with two keys: add and getAll. This means that, whenever you access pokemonRepository somewhere in your app, it will represent an object with these two keys."??
//Two seperate functions
  function getAll () {
    return pokemonList;
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

//information that is returned is accessible from outside the IIFE
  return {
    add: add,
    getAll: getAll
  };

//Closing brackets of IIFE
}
  ) ();

//Loop(iterator i starts with index 0; as long as i is less than number of objects; add 1 to i) -> write property "name"
//  for(let i = 0; i < pokemonList.length; i++){
//     document.write('<p>' + pokemonList[i].name + '</p>')
//     }

//Loop(iterator i starts with index 0; as long as i is less than number of objects; add 1 to i) -> write property "name"
// if height is higher than 1.5 write name , height and "Wow, that's big!", else write name and height
//  for(let i = 0; i < pokemonList.length; i++){
//  if (pokemonList[i].height > 1.5) {
//      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)'+ ' - Wow, that\'s big!' + '</p>') 
//    } else {
//      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)'+ '</p>') /*put style as string into index.html*/
//    }
//  } 

//forEach
//The function(item) is passed as a parameter to the forEach()function
//my array.forEach(function(property){action(key.property)}); 
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name);
});

console.log(pokemonRepository.getAll());




