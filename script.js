const text = "Kapileswar Rout";
const element = document.getElementById("animated-text");

let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200); // Adjust typing speed here
  } else {
    // Stop blinking effect after typing is done
    element.style.borderRight = "none";
  }
}

typeWriter();
