// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password"));
  console.log(count);
  if (count < 8 || count > 128) {
    alert("Out of range.");

    return "";
  }
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //  pool of characters that are valid to be added for selection
  // lower case letters are added by default
  var pool = letters;
  // adds numbers to pool if selected
  if (confirm("Do you want numbers in your password")) {
    pool += numbers;
  }
  // adds special character to pool for selection
  if (confirm("Do you want special characters in your password")) {
    pool += special;
  }
  // adds uppercase letters to pool for selection if desired
  if (confirm("Do you want uppercase letters in your password")) {
    pool += uppercase;
  }

  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * pool.length);
    genPassword += pool[random];
  }


  return genPassword;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
