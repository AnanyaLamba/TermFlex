

function colorRandom() {
  return Math.floor(Math.random() * (255 - 40) + 40);
}
function backgroundColorRandom() {
  let redA = colorRandom();
  let greenA = colorRandom();
  let blueA = colorRandom();
  let redB = colorRandom();
  let greenB = colorRandom();
  let blueB = colorRandom();
  document.body.style.background = `linear-gradient(45deg,rgb(${redA},${greenA},${blueA}),rgb(${redB},${greenB},${blueB}))`;
}
backgroundColorRandom();

// select the container in which you want to display
const text = "To get started; type help and press Enter !!";
const element = document.getElementById("display"); // Remove the '#' symbol
// character.appendChild(curser); ///this will show the curser subse pehle
//curser lagana
const curser = document.createElement("span");
curser.textContent = "_";
curser.className = "curser";

function CharacterByCharacter(text, element) {
  let i = 0;
  element.appendChild(curser);
  function printNextCharacter() {
    if (i < text.length) {
      element.textContent = element.textContent.slice(0, -1);
      element.textContent += text[i];
      console.log(element.textContent);
      i++;
      element.appendChild(curser);
      setTimeout(printNextCharacter, 50); // Adjust the delay if needed
    } 
    else {
      const line_4 = document.querySelector(".line_4");
      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          line_4.style.visibility = "visible";
        }
      });
    }
  }
  printNextCharacter();
}

// console.log("This marks the beginning");
function f3() {
  CharacterByCharacter(text, element);
}
setTimeout(f3, 100); //dirrect function with parameters pass nahi kerte pehle ek funtion le lo aur phir usko pass karo
