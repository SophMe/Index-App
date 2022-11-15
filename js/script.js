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

//Loop(iterator i starts with index 0; as long as i is less than number of objects; add 1 to i) -> write property "name"
//  for(let i = 0; i < pokemonList.length; i++){
//     document.write('<p>' + pokemonList[i].name + '</p>')
//     }

//Loop(iterator i starts with index 0; as long as i is less than number of objects; add 1 to i) -> write property "name"
// if height is higher than 1.5 write name , height and "Wow, that's big!", else write name and height
  for(let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 1.5) {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)'+ ' - Wow, that\'s big!' + '</p>') 
    } else {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)'+ '</p>') /*put style as string into index.html*/
    }
  } 
    
function divide(dividend, divisor){
  if (divisor === 0) {
    return("You\'re trying to divide by zero")
  }
  else {
    let result =dividend/divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));


