import * as moduls from './modalBox/modalBoxFunctionating'

import {sortByPriceOnClick} from './sortingProteins/sortingProteins'

import {instructorSection} from './instructorSection/instructorSection'

import {onScrollingProgressBarFunction} from './windowAddEventListeners/windowAddEventListeners'

import {typeWriter} from './windowAddEventListeners/windowAddEventListeners'

import {getData} from './theMainFilteringProteinsSectionWithHighestPrices/theMainFilteringProteinsSectionWithHighestPrices'

export let allProteins = [];

window.addEventListener("load" , () =>  {
  setTimeout(() => {
    typeWriter();
  },1000)
});

moduls.openingAndClosingTheModalBox();

sortByPriceOnClick();

window.addEventListener("scroll" , () => {
  onScrollingProgressBarFunction();
})

