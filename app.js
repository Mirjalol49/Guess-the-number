// Getting elements from html
const checkBtn = document.getElementById("check");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const body = document.body.style;

//Giving min and max
const min = 10;
const max = 20;

// Generating Random number
const random = Math.floor(Math.random() * (max - min + 1) + min);

// Checking value
checkBtn.onclick = function () {
  const valueInput = input.value;

  // Checking it is correct or not
  if (valueInput == random) {
    answer.textContent = `Congrats🎉 it was indeed ${random}`;
    input.disabled = true;
    body.backgroundColor = "#04e762";

    //Changing button to again and refreshing the page
    checkBtn.textContent = "Again";
    checkBtn.onclick = function () {
      location.reload();
    };
  } else {
    valueInput > random
      ? (answer.textContent = `Sorry😟 it is lower than ${valueInput}`)
      : (answer.textContent = `Sorry😟 it is above than ${valueInput}`);
  }
};

console.log(random);
