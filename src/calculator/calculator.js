

var myNodelist = document.getElementsByClassName("calculatorBox");

let theSumFromTheProteins = document.getElementById("sum");


// Calculate the sum
export function Calculator() 
{
  let sum = 0;
  theSumFromTheProteins.innerHTML = sum;
  for(let item of myNodelist) {
    item.addEventListener("click" , function(event) {
      event.target.classList.toggle('checked');
      if(event.target.classList.contains("checked")) {
        
        let theSinglePrice = event.target.children[1].children[0].textContent;
        theSinglePrice = parseInt(theSinglePrice);
        sum+= theSinglePrice;
        theSumFromTheProteins.innerHTML = sum;
      }

      if(!event.target.classList.contains("checked")) {
        let theSinglePrice = event.target.children[1].children[0].textContent;
        theSinglePrice = parseInt(theSinglePrice);
        sum-= theSinglePrice;
        theSumFromTheProteins.innerHTML = sum;
      }
    })
  }
  slideDownTheDescriptionTextOnClick();
}


const slideDownTheDescriptionTextOnClick = () => 
{
  var acc = document.querySelectorAll(".openTheDescriptionText");
  for (var ii = 0; ii < acc.length; ii++) {

  acc[ii].addEventListener("click", function(event) {
      this.classList.toggle("active");
    var panel = this.parentElement.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
}

