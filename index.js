const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let resultBox = document.getElementById("result");

function showMsg() {
  if (isPalindrome(textInput.value)) {
    resultBox.innerText = `${textInput.value} is a palindrome.`;
  } else {
    resultBox.innerText = `${textInput.value} is not a palindrome.`;
  }
}

function purifyString(string) {
  const pattern = /[$\s\p{P}]/gu;
  return string.replace(pattern, "").toLowerCase();
}
function reverseString(string) {
  let result = string.split("").reverse().join("").toLocaleLowerCase();
  console.log(result);
  return result;
}

const isPalindrome = (string) => {
  return purifyString(string) === reverseString(purifyString(string))
};

checkBtn.addEventListener("click", () => {
  isPalindrome(textInput.value);
  if (purifyString(textInput.value) === "") {
    alert("Please Input a value");
    return;
  }
  showMsg();
  textInput.value = "";
});
