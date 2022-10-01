// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var caps = ["A", "B", "C", "D", "E", "F", "G", "H"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h"]
  var number = ["1", "2", "3", "4", "5", "6", "7", "8"]
  var symbol = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var length = prompt("how long password?")
  if (length < 8) {
    alert("password is too short")
    return
  }
  if (length > 128) {
    alert("password is too long")
    return
  }
  var hasCap = confirm("do you want to use capital letters?")
  var hasLow = confirm("do you want to use lower case?")
  var hasNum = confirm("do you want to use numbers?")
  var hasSym = confirm("do you want to use symbols?")

  console.log(length)
  var allLetters = []


  if (hasCap === true){
    allLetters = caps.concat(allLetters)
  }
  if (hasLow === true) {
    allLetters = lowercase.concat(allLetters)
  }
  if (hasNum === true) {
    allLetter = number.concat(allLetters)
  }
  if (hasSym === true) {
    allLetters = symbol.concat(allLetters)
  }
  if (allLetters.length === 0) {
    alert("must select one charecter");
    return
  }

  

  var pass = ""
  for (var i = 1; i <= length; i++) {
    console.log(i);
    var random = Math.floor(Math.random() * allLetters.length)
    var char = allLetters[random]
    pass = char + pass
  }
  return pass
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
