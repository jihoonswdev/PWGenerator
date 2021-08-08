var generateBtn = document.querySelector("#generate");

var specialChars = "!@#$%^&*";
var numericalChars = "0123456789";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordResults = "";
var userOptions = "";

function generatePassword() {
  var passLength = prompt("How many characters do you want as your password?");
console.log(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("You have to have at least 8 characters long and lower than 128 characters");
    return;
  }

var useLowerCase = confirm("Do you want to use lower case?");
var useUpperCase = confirm("Do you want to use upper case?");
var useSpecialChars = confirm("Do you want to use special chars?");
var useNumerialChars = confirm("Do you want to use numerical chars?");

if (
  useLowerCase === false &&
  useUpperCase === false &&
  useSpecialChars === false &&
  useNumerialChars === false
) {
  alert("You must choose at least one character type!");
}

if (useLowerCase === true) {
userOptions = userOptions.concat(lowerCaseChars)
}
if (useUpperCase === true) {
userOptions = userOptions.concat(upperCaseChars)
}
if (useSpecialChars === true) {
userOptions = userOptions.concat(specialChars)
}
if (useNumerialChars ===true) {
userOptions = userOptions.concat(numericalChars)
}

console.log(userOptions)

for (var i=0; i < passLength; i++) {
  // var password = math.floor(userOptions * Math.random());
// userOptions.push (pwResults[Math.floor(Math.random() * pwResults.length)]);
//   pwResults += userOptions.charAt(password);
var password = Math.floor(userOptions.length * Math.random())

   passwordResults += userOptions.charAt(password)

}
// return userOptions.join("");
document.getElementById("password").textContent = passwordResults;
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// document.getElementById("password").textContent = pwResults;

generateBtn.addEventListener("click", generatePassword);