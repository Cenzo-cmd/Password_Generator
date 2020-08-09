var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialCharacters = "!#$&%&')(*+,-:;<=>?@[\]^_'{|}~";
let charactersToUse = "";
let passwordLength = 8;

function generatePassword() {
    charactersToUse = "";
    let passwordCharacters = "";
    passwordLength = prompt("Please pick a character length for your password.\nMinimum is 8 Characters\nMaximum is 128 Characters");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid length selection");
    } else {
        let lowerCaseLog = confirm("Do you want to use lower case letters?\nOK=Yes\nCancel=No");
        if (lowerCaseLog) {
            charactersToUse = charactersToUse.concat(lowerCaseLetters);
        }
        let upperCaseLog = confirm("Do you want to use upper case letters?\nOK=Yes\nCancel=No");
        if (upperCaseLog) {
            charactersToUse = charactersToUse.concat(upperCaseLetters);
        }
        let numberLog = confirm("Do you want to use numbers?\nOK=Yes\nCancel=No");
        if (numberLog) {
            charactersToUse = charactersToUse.concat(numbers);
        }
        let specialCharactersLog = confirm("Do you want to use special characters?\nOK=Yes\nCancel=No");
        if (specialCharactersLog) {
            charactersToUse = charactersToUse.concat(specialCharacters);
        }

        for (var i = 0; i < passwordLength; i++) {
            var randomCharacters = Math.floor(Math.random() * charactersToUse.length);
            passwordCharacters = passwordCharacters + charactersToUse.charAt(randomCharacters);
        }
    }
    return passwordCharacters;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}