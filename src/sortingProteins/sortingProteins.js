import {allProteins} from '../index'

//2
// import {theLookOfTheProteinsInTheModalBody} from '../index'

import {theLookOfTheProteinsInTheModalBody} from '../modalBox/modalBoxFunctionating'

let sortByHighestPrices = document.querySelector(".sortByHighestPrices");
let sortByLowestPrices = document.querySelector(".sortByLowestPrices");



sortByHighestPrices.addEventListener("click"  , () => {
  sortByPriceOnClick(sortByHighestPrices);
});


sortByLowestPrices.addEventListener("click"  , () => {
  sortByPriceOnClick(sortByLowestPrices);
});


export function sortByPriceOnClick(typeOfSorting)  {
    try{
        if(typeOfSorting.classList.contains("sortByHighestPrices")) {
            allProteins.sort((a,b) => {return b.price - a.price})
             updateListElements();
           }
         
           if(typeOfSorting.classList.contains("sortByLowestPrices")) {
            allProteins.sort((a,b) => {return a.price - b.price})
             updateListElements();
           }
    }

    catch(err) {
        
      }
}

//Update the look in the modal body after the user choose the filtering of the protein prices
export function updateListElements() {
  $(".theMainSectionInTheModalBody").html(' ');
  theLookOfTheProteinsInTheModalBody();
}