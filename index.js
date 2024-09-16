//creat a site that would if a word is a palindrome or not
/*
1. get the input value from the site
create a function the removes 
2. reverse the string 
    a.learn about split()
3. match the word 
4. notify the use of the result
*/

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let purifiedString = "";
let reversedString = "";

//removes space panctuations and symbols from the sring and return
function purifyString(string) {
  const pattern = /[$\s\p{P}]/gu;
  purifiedString = string.replace(pattern, "");
}
// this seperates the letter and reverses in an array.
function reverseString(string) {
  const seperateLetters = string.split("");
  seperateLetters.reverse();
  seperateLetters.join("");
  reversedString = seperateLetters[0];
}

const isPalindrome = () => (reversedString === purifiedString ? true : false);
/*
purify the string
reverse the string 
compare the reverser string with the purified string

*/
checkBtn.addEventListener("click", () => {
  purifyString(textInput.value);
  reverseString(textInput);
  console.log(isPalindrome);
  console.log("clicked");
});
