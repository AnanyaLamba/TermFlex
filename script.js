// Gradient array
const help = document.querySelector("#help");
const container = document.querySelector(".container");
const hidden = document.querySelector(".hidden_content");
const line_3 = document.querySelector(".line_3");
const change_command = document.querySelector("#change_command");
const visible = document.querySelector("#visible");
const textt = document.querySelector("#text");
const displayElement = document.getElementById("display");
const getStarted = displayElement.innerHTML;
let gradient = [
  "linear-gradient(to right, #D8B5FF, #1EAE98)",
  "linear-gradient(to left, #D8B59F, #1EAE98)",
  "linear-gradient(to top, #D8B59F, #1EA998)",
  "linear-gradient(to top, #D8759F, #1EA998)",
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

//curser lagana
const curser = document.createElement("span");
curser.textContent = "_";
curser.classList.add("curser");

displayElement.innerHTML = ""; // Clear the text content

function CharacterByCharacter(text, element) {
  let i = 0;
  // element.appendChild(text);
  console.log("text",text);
  console.log("element",element);

  element.appendChild(curser);
  function printNextCharacter() {
    if (i < text.length) {
      element.innerHTML = element.textContent.slice(0, -1);
      element.innerHTML += text[i];
      console.log(element.textContent);
      i++;
      element.appendChild(curser);
      setTimeout(printNextCharacter, 50); // Adjust the delay if needed
    } else {
      curser.classList.add("blinkCursor");
    }
  }
  printNextCharacter();
}

console.log("after character by character");

//line 4 ko print kerne ke liye
const line_4 = document.querySelector(".line_4");
      setTimeout(() => {
        line_4.style.visibility = "visible";
      }, 6000);


//second page ka content

setTimeout(() => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // hidden.style.display = "none";
      line_3.style.display = "none";
      line_4.style.display = "none";
      change_command.textContent = "Excutted Command: help";
      hidden.innerHTML =
        "Namaste(hindi)! The Following options are available: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, sama, clear, new, man, home";
  
      // container.style.display = "block";
      console.log("visible section ", visible.textContent);
    }
  });
},6000);


// console.log("This marks the beginning");
function callingCharacterByCharacter() {
  console.log("here we are in f3");
  CharacterByCharacter(getStarted, displayElement);
  
}
setTimeout(callingCharacterByCharacter, 2000); //dirrect function with parameters pass nahi kerte pehle ek funtion le lo aur phir usko pass karo

