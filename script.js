// Gradient array
let gradient = [
  "linear-gradient(to right, #D8B5FF, #1EAE98)", 
  "linear-gradient(to left, #D8B59F, #1EAE98)",
  "linear-gradient(to top, #D8B59F, #1EA998)",
  "linear-gradient(to top, #D8759F, #1EA998)"
];

// Function to apply a random gradient as the background
function applyRandomGradient() {
  // Get a random index from the gradient array
  let randomIndex = Math.floor(Math.random() * gradient.length);

  // Apply the selected gradient as the background
  document.body.style.background = gradient[randomIndex];
}

// Call the function on page load
window.onload = applyRandomGradient;

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
