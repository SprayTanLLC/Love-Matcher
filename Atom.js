let randomNum = Math.floor(Math.random() * 100) + 1;

const getRandomNumber = () => {
  return randomNum;
};

const replaceHTML = () => {
  document.getElementById("result").innerHTML =
    getRandomNumber() + "% love potential";
};

document.getElementById("clickMe").addEventListener("click", replaceHTML);
