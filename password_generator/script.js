const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const val = resultEl.innerText;

  if (!val) return;

  textarea.value = val;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  const typeCount = lower + upper + number + symbol;
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typeCount == 0) return "";

  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach((type) => {
      const name = Object.keys(type)[0];
      generatedPassword += randomFunc[name]();
    });
    console.log(generatedPassword);
  }
  return generatedPassword
    .slice(0, length)
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const str = "!@#$%^&*(){}[]=<>/,.";
  return str[Math.floor(Math.random() * str.length)];
}
