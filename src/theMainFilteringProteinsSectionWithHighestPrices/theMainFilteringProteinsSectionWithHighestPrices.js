import {Http} from '../http/http';

import {theLookOfTheProteinsInTheModalBody} from '../modalBox/modalBoxFunctionating'

import {allProteins} from '../index'

import {Protein} from '../proteinClass/proteinClass'

export const getData = () => {
    Http.fetchData('https://raw.githubusercontent.com/StefanijaS/all-proteins-api/master/allProteins.json')
    .then(proteins => {
      theLookOfTheProteinsInTheModalBody(proteins);
        let mostExpensiveProteins = proteins.filter(x => x.price > 60);
         proteins.forEach(protein => allProteins.push(
          new Protein(protein.name, protein.description, protein.price, protein.image, protein.text)
        ));
        renderingTheData(mostExpensiveProteins);
    })
  }
  getData();


  const renderingTheData = (mostExpensiveProteins) => {
    for(let i = 0;i < mostExpensiveProteins.length;i++) {
        $(".sellingProteinsSection").append(`
            <div class="proteinBox">
                <p class="proteinName"> ${mostExpensiveProteins[i].description} | ${mostExpensiveProteins[i].name}<span class="proteinPrice">${ mostExpensiveProteins[i].price} $</span></p>
                  <div class="flip3d">
                      <div class="back"><img class="proteinImage" src=${mostExpensiveProteins[i].image} /></div>
                      <div class="front"><img class="proteinImage" src=${mostExpensiveProteins[i].image} /></div>
                  </div>
                <p class="proteinText">${mostExpensiveProteins[i].text}</p>     
            </div>
        `)
    }
    theLookOfTheProteinsInTheModalBody();
  }
  