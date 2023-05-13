
let userInput = document.querySelector('#userInput');

fetch(`https://pokeapi.co/api/v2/pokemon/${userInput.value}`)
        .then(function(response){
          if(userInput.value >= 906){
            submitInput.innerText = "Pokemon's over 899 are currently not available or have no moves currently "
        }
              return response.json()
        })
        .then(function(data){
          console.log(data);

          characterOne = data
          
        
          //Resetting character info to search another character
          characterInfo.innerText = "";
          characterTitle.innerHTML = ''
          //setting card img to user's selected character
          img.src = characterOne.sprites.other["official-artwork"].front_default;
          let character1Img = img.src;
          //making the card visible
          characterCard.style.opacity = "10";
          //characters characterOne
          
          characterTitle.innerHTML = `${characterOne.name.toUpperCase()}`;
          characterInfo.innerText += `\n Height: ${characterOne.height}'00"`;
          characterInfo.innerText += `\n Weight: ${characterOne.weight}lbs`;
          characterInfo.innerText += `\n Type: ${characterOne.types[0].type.name.toUpperCase()}`;
          characterInfo.innerText += `\n Abilities: ${characterOne.abilities[0].ability.name}`;
          characterInfo.innerText += `\n Attack: ${characterOne.stats[0].base_stat}` ;
          characterInfo.innerText += `\n Defense: ${characterOne.stats[1].base_stat}`;
          characterInfo.innerText += `\n Special Attack: ${characterOne.stats[2].base_stat}`;
          characterInfo.innerText += `\n Special Defense: ${characterOne.stats[3].base_stat}`; 
          characterInfo.innerText += `\n Speed: ${characterOne.stats[4].base_stat}`;
          
          //resetting the character card
          characterCard.style.display = "";
          //hiding the Moves card
          characterCard2.style.opacity = "0";
          //resetting userInput
          userInput.value = "";
          
          //Moves arrow event listener
          movesArrowButton.addEventListener("click", () => {
          //new image for the moves card
          characterImg2.src = characterOne.sprites.other["official-artwork"].front_default;
          
          //character moves characterOne
          
          characterInfo2.innerText = `${characterOne.name} Moves: \n`;
          characterInfo2.innerText += `\n${characterOne.moves[0].move.name.toUpperCase()} `;
          characterInfo2.innerText = characterOne.moves[0].move.name.toUpperCase() + "\n";
          characterInfo2.innerText = characterOne.moves[0].move.name.toUpperCase() +  "\n";
          characterInfo2.innerText += characterOne.moves[1].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[2].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[3].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[4].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[5].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[6].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[7].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[8].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[9].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[10].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += `\n${characterOne.moves[11].move.name.toUpperCase()}`;
          characterInfo2.innerText += characterOne.moves[12].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[13].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[14].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[15].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[16].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[17].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[18].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[19].move.name.toUpperCase() + "\n";
          characterInfo2.innerText += characterOne.moves[20].move.name.toUpperCase() + "\n";

          //resetting first character card description
          characterInfo.innerText = "";
          //hiding first character card
          characterCard.style.display = "none";
          //resetting Moves card
          characterCard2.style.display = "";
          //viewing Moves card
          characterCard2.style.opacity = "10";
          //resetting search bar
          userInput.value = "";
      })    
        })












function getProductData(id){
    let characterOne = productsArray.find(product => product.id === id)

    if(characterOne === undefined){
        console.log("Product data does not exist for ID" + id)
        return undefined;
    }

    return characterOne
}
        
export { productsArray, getProductData };