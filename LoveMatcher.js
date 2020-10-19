let submitButton = document.getElementById("bs-butt");
let resetButton = document.getElementById("clearForm");
let loveForm = document.getElementById("loveForm");


const getRandomNumber = () => {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum;
};

const handleSubmit = () => {
  document.getElementById("result").innerHTML =
     getRandomNumber() + "% love potential";
  submitButton.style.display = "none";
  resetButton.style.display = "inline-block";
};

const handleReset = () => {
  loveForm.reset();
  submitButton.style.display = "inline-block";
  resetButton.style.display = "none";
  document.getElementById("result").innerHTML = "RESULT: "
}

document.getElementById("bs-butt").addEventListener("click", handleSubmit);
resetButton.addEventListener("click", handleReset);


// if the love compatability is under 50%, display a broken heart, if it is above 50%, display lots of hearts;
