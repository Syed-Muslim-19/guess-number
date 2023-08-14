const int = Math.random() * 20 + 1;
const GuessNum = Math.trunc(int);
let Score = 10;
document.querySelector(".start").addEventListener("click", function () {
  const Data = document.querySelector("#number").value;
  if (!Data) {
    document.querySelector(".loading").textContent = "No Number Entered 😕";
  } else if (Number(Data) > 20 || Number(Data) < 0) {
    document.querySelector(".loading").textContent = "Out of Range 😓";
  } else if (GuessNum === Number(Data)) {
    document.querySelector(".loading").textContent =
      "Congratulations You Got It  🥳🤩  ";
    document.body.style.backgroundColor = "rgba(0, 128, 0, 0.573)";
    document.querySelector("p").style.color = "white";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").textContent = '"Number Guessed"';
    document.querySelector("#number").style.color = "white";
    document.querySelector(".start").style.color = "white";
    document.querySelector(".loading").style.color = "white";
    document.querySelector(".score").style.color = "white";
    document.querySelector(".highest").style.color = "white";
    document.querySelector(".total").style.color = "white";
    document.querySelector(".record").style.color = "white";
    document.querySelector(".guessit").textContent = GuessNum;
    document.querySelector(".record").textContent = Score;
    document.querySelector(".start").style.display = "none";
    document.querySelector("h1").style.borderColor = "white";
    document.querySelector("#number").style.borderColor = "white";
  } else if (GuessNum > Number(Data)) {
    document.querySelector(".loading").textContent = "To Low 🙄";
    if (Score > 0) {
      Score--;
      document.querySelector(".total").textContent = Score;
    } else {
      document.querySelector(".loading").textContent = "You Lose 😔";
      document.querySelector(".start").style.display = "none";
    }
  } else {
    document.querySelector(".loading").textContent = "To High 🤯";
    if (Score > 0) {
      Score--;
      document.querySelector(".total").textContent = Score;
    } else {
      document.querySelector(".loading").textContent = "You Lose 😔";
      document.querySelector(".start").style.display = "none";
    }
  }
});
console.log(GuessNum);
