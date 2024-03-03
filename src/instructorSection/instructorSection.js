import {Coach} from '../proteinClass/proteinClass'
import {Http} from '../http/http';

let arrInst = [];

export const instructorSection = () => {
  
  Http.fetchDataInstructors('https://raw.githubusercontent.com/StefanijaS/get-instructors/master/instructors.json')
  .then(coaches => {
    coaches.forEach(coach => arrInst.push(
      new Coach(coach.name, coach.position, coach.WhyYouCoach, coach.favoriteMovement, coach.favoriteQuote)
    ));
    makingTheInstructorSection(arrInst);
  })
}


instructorSection();


const makingTheInstructorSection = (arrInst) => {
  for(let coach of arrInst) {
    $('.instructorBoxes').append
    (`
    <div class="infoPerInstructor">
      <img src="ImageGalleryPictures/proba1.jpg"/>
    
        <div class="firstOverlay">   
        <p class="arrowPointerInstructor">&#8594;</p> 
            <div class="text">
            <p class="arrowPointerInstructor">&#8594;</p> 
                <h3>${coach.name}</h3>
                <p style="color:yellow" >${coach.position}</p>
            </div>
        </div>

        <div class="secondOverlayOnClick">
        <img class="instructorImage" src="ImageGalleryPictures/instructors.jpg"/>
        <span class="closeTheInstructorBox">&times;</span>  
        
                <h1>${coach.name}</h1>
                <h4>${coach.position}</h4>
                <p>Why you coach:</p>
                <p>${coach.WhyYouCoach}</p> 

                <p>Favorite Movement:</p>
                <p>${coach.favoriteMovement}</p> 

                <p>Favorite Quote:</p>
                <p>${coach.favoriteQuote}</p> 
              
        </div> 
    </div>
  `)
  }
}


let arrowPointerInstructor = document.querySelectorAll(".arrowPointerInstructor");


let first = document.querySelectorAll(".firstOverlay");



let instructorBoxes = document.getElementsByClassName("instructorBoxes");

let closing = document.getElementsByClassName("closeTheInstructorBox");

let infoPerInstructor = document.querySelectorAll(".infoPerInstructor");


for(let item of instructorBoxes) {
  item.addEventListener("click" , (e) => {
    if(e.target.classList.contains("arrowPointerInstructor")) {
      e.target.parentElement.parentElement.nextElementSibling.classList.add("activeteTheSecondOverlayOnClick");
    }
  })
}


let body = document.querySelector("body");


body.addEventListener("click" , (e) => {
  if(e.target.classList.contains("closeTheInstructorBox")) {
    e.target.parentElement.classList.remove("activeteTheSecondOverlayOnClick")
  }
})