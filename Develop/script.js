// Assignment code here
function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', ';', ',', '<', '>', '/', '?', '`']
  var possibleCharacters = [];

 numberOfCharacters = prompt("How many characters do you want to use for your password? Choose between 8-128 characters.")
 if ((numberOfCharacters < 8 || numberOfCharacters > 128) || isNaN(numberOfCharacters)) {
 numberOfCharacters = prompt("How many characters do you want to use for your password? Choose between 8-128 characters.");
 }
 else {
  alert("Your password will be " + numberOfCharacters + " characters long.");

 }

 hasLowercase = confirm("Do you want to include lowercase characters?");
 if (hasLowercase) {
  alert("Your password will included lowercase characters.");
 }
 else {
  alert("Your password will not included lowercase characters.")
 }

 hasUppercase = confirm("Do you want to include uppercase characters?");
 if (hasUppercase) {
  alert("Your password will included uppercase characters.");
 }
 else {
  alert("Your password will not included uppercase characters.")
 }

 hasNumbers = confirm("Do you want to include numbers?");
 if (hasNumbers) {
  alert("Your password will include numbers.");
 }
 else {
  alert("Your password will not include numbers.");
 }

 hasSpecial = confirm("Do you want to include special characters?");
 if (hasSpecial) {
  alert("Your password will include special characters.");
 }
 else {
  alert("Your password will not include special characters.")
 }

 if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
  numberOfCharacters = prompt("How many characters do you want to use for your password? Choose between 8-128 characters.");
 };

 if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
 }
 if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
 }
 if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
 }
 if (hasSpecial) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
 }

 let newPassword = ""
 for (let i = 0; i < numberOfCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  newPassword = newPassword + possibleCharacters[rng];
 }
 return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
