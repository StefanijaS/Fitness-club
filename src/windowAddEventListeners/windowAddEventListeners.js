
import * as elements from '../elements/elements';

export function onScrollingProgressBarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  let textWritingCounter = 0;
const txt = "Welcome to our web site";
const speed = 50;

  export function typeWriter() {
    if (textWritingCounter < txt.length) {
      elements.welcomeMessage.innerHTML += txt.charAt(textWritingCounter);
      elements.welcomeMessage.classList.add("newList");
      textWritingCounter++;
      setTimeout(typeWriter, speed);
    }
  }