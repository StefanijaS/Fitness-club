import * as elements from '../elements/elements';

import { Calculator} from '../calculator/calculator'

import {allProteins} from '../index'

export const openingAndClosingTheModalBox = () => 
{
    // When the user clicks the button, open the modal 
    elements.openTheModalBox.addEventListener("click", () => {
      elements.theModalBox.style.display = "block";
    })

    // When the user clicks on <span> (x), close the modal
    elements.closeTheModalBox.addEventListener("click" , () => {
      elements.theModalBox.style.display = "none";
    })

    //When the user clicks outside the modal,he will be closed
    window.addEventListener("click" , (event) => {
      if (event.target == elements.theModalBox) {
        elements.theModalBox.style.display = "none";
      }
    })
}



//1
export const theLookOfTheProteinsInTheModalBody = () => 
{
  for(let elements of allProteins) {
    $('.theMainSectionInTheModalBody').append
    (`
      <div class="calculatorBox">
        <span class="openTheDescriptionText">&#43;</span>
          <div class="suc">${ elements.name } <span>${ elements.price }</span></div>
          <span><img class="imagesInTheModalBodySection" src=${elements.image} /></span>
      </div> 

      <div class="panel">
        <p class="calculatorBoxText">${elements.text}</p>
      </div>
  `)
  }
  Calculator();
}



