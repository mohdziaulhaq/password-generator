const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// event listener to listen to copy to clipboard functionality
clipboardEl.addEventListener("click", () => {
  var text = document.getElementById("result").value;
  navigator.clipboard.writeText(text);
});

// event listener for generating password
generateEl.addEventListener("click", () => {
  generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    lengthEl.value
  );
});

// generates a password based on the length and other parameters(upper, lower, number and special characters)
function generatePassword(lower, upper, number, symbol, length) {
  let password = "";
  let character;
  // temp variable to get a random number
  let temp;
  for (let i = 0; i < length; i++) {

    // returns a random number from 0 to 3
    temp = Math.floor(Math.random() * 4);
    if (lower && temp == 1) character = getRandomLower();
    else if (upper && temp == 2) character = getRandomUpper();
    else if (number && temp == 3) character = getRandomNumber();
    else if (symbol && temp == 0) character = getRandomSymbol();
    else if (lower) character = getRandomLower();
    else if (upper) character = getRandomUpper();
    else if (number) character = getRandomNumber();
    else if (symbol) character = getRandomSymbol();

    // if no checkbox is checked, will generate a password of lower characters
    else character = getRandomLower();

    // getting a new character, if in any case a undefined character was returned
    if (character === undefined) {
      if (lower) character = getRandomLower();
      else if (upper) character = getRandomUpper();
      else if (number) character = getRandomNumber();
      else if (symbol) character = getRandomSymbol();
    }
    password = password + character;
    console.log("password : " + password);
  }
  document.getElementById("result").value = password;
}

function getRandomLower() {
  const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let random = smallAlphabets[Math.floor(Math.random() * 26)];
  return random;
}

function getRandomUpper() {
  const bigAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random = bigAlphabets[Math.floor(Math.random() * 26)];
  return random;
}

function getRandomNumber() {
  let random = Math.floor(Math.random() * 10);
  return random;
}

function getRandomSymbol() {
  let symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
  let random = symbols[Math.floor(Math.random() * 31)];
  return random;
}
