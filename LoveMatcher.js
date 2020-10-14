let randomNum = Math.floor(Math.random() * 100) + 1;

const getRandomNumber = () => {
  return randomNum;
};

const replaceHTML = () => {
  document.getElementById("result").innerHTML =
    "RESULT: " + getRandomNumber() + "% love potential";
  document.getElementById("bs-butt").innerHTML = "Reset";
};

//document.getElementById("clickMe").addEventListener("click", replaceHTML);

document.getElementById("bs-butt").addEventListener("click", replaceHTML);

// if the love compatability is under 50%, display a broken heart, if it is above 50%, display lots of hearts;
