// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var letter = ["a", "b", "c", "d", "e", "f", "g", "h"]
  var length = prompt("how long password?")
  console.log(length)

  for (var i = 1; i <= length; i++){
  console.log(i);
  }
return "example"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
