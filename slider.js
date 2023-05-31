const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");

let slideNumber = 0;
const slideWidth = 600;
const maxSlideNumber = images.length - 1;

for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    resetBg();
    button.style.backgroundColor = "white";
    slideNumber = index;
  });
});

right.addEventListener("click", () => {
  if (slideNumber < maxSlideNumber) {
    slideNumber++;
  } else {
    slideNumber = 0;
  }
  slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
  resetBg();
  buttons[slideNumber].style.backgroundColor = "white";
});

left.addEventListener("click", () => {
  if (slideNumber > 0) {
    slideNumber--;
  } else {
    slideNumber = maxSlideNumber;
  }
  slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
  resetBg();
  buttons[slideNumber].style.backgroundColor = "white";
});
