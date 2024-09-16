const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let resultBox = document.getElementById("result");
let purifiedString = "";
let reversedString = "";

function showMsg() {
  if (isPalindrome()) {
    resultBox.innerText = `${textInput.value} is a palindrome.`;
  } else {
    resultBox.innerText = `${textInput.value} is not a palindrome.`;
  }
}

function purifyString(string) {
  const pattern = /[$\s\p{P}]/gu;
  purifiedString = string.replace(pattern, "");
  purifiedString = purifiedString.toLowerCase();
  console.log(purifiedString);
}
function reverseString(string) {
  let resultArr = string.split("");
  resultArr.reverse();
  reversedString = resultArr.join("");
  reversedString = reversedString.toLocaleLowerCase();
  console.log(reversedString);
}

const isPalindrome = () => (reversedString === purifiedString ? true : false);

checkBtn.addEventListener("click", () => {
  purifyString(textInput.value);
  if (purifiedString === "") {
    alert("Please Input a value");
    return;
  }
  reverseString(purifiedString);
  console.log(isPalindrome());
  showMsg();
  textInput.value = "";
});
