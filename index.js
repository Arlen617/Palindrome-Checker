const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
  const textInput = document.getElementById("text-input");
  let resultBox = document.getElementById("result");
  if (textInput.value === "") {
    alert("Please Input a value");
    return;
  }
  const isPalindrome = (string) => {
    const pattern = /[$\s\p{P}]/gu;
    const purifiedString = string.trim().replace(pattern, "").toLowerCase();
    const reversedString = purifiedString
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
    return purifiedString === reversedString;
  };
  function showMsg() {
    if (isPalindrome(textInput.value)) {
      resultBox.innerText = `${textInput.value} is a palindrome.`;
    } else {
      resultBox.innerText = `${textInput.value} is not a palindrome.`;
    }
  }
  showMsg();
  textInput.value = "";
});
