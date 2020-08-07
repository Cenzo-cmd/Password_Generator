var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialCharacters = "!#$&%&')(*+,-:;<=>?@[\]^_'{|}~";


lowerCaseLetters = lowerCaseLetters.split("");
upperCaseLetters = upperCaseLetters.split("");
specialCharacters = specialCharacters.split("");
numbers = numbers.split("");


function generatePassword() {
    let charactersToUse = [];
    let passwordLength = passwordLengthPrompt();
    let lowerCaseLog = confirm("Do you want to use lower case letters?\nOK=Yes\nCancel=No");
    let upperCaseLog = confirm("Do you want to use upper case letters?\nOK=Yes\nCancel=No");
    let numberLog = confirm("Do you want to use numbers?\nOK=Yes\nCancel=No");
    let specialCharactersLog = confirm("Do you want to use special characters?\nOK=Yes\nCancel=No");
    if (lowerCaseLog) {
        charactersToUse.push(lowerCaseLetters);
    }
    if (upperCaseLog) {
        charactersToUse.push(upperCaseLetters);
    }
    if (numberLog) {
        charactersToUse.push(numbers);
    }
    if (specialCharactersLog) {
        charactersToUse.push(specialCharacters);
    }
    console.log(charactersToUse);


}

function passwordLengthPrompt() {
    let characterLenghtLog = prompt("Please pick a character length for your password.\nMinimum is 8 Characters\nMaximum is 128 Characters");
    if (characterLenghtLog < 8 || characterLenghtLog > 128) {
        return passwordLengthPrompt();
    }
    return characterLenghtLog;
}





function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}