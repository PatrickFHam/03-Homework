// This was given.  It links via DOM to HTML.
var generateBtn = document.querySelector("#generate");

// All of the contents of this function are my own work, with the help of a lot of reading, studying, and trial-and-error.
function generatePassword() {

  // Starting points for these variables... will be built-onto below.  Also resets if the Generate button is pushed again.
  var password = '';
  var passwordBeingGenerated = '';

  // Arrays of characters from which to randomize below.
  const charSets = {
    lowers:"abcdefghijklmnopqrstuvwxyz",
    uppers:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"1234567890",
    symbols:"!@#$%^&*()+-*/[]{}|;,.<>?",
  };

  // This is the pre-built character set, if the user chooses to not customize criteria.
  const defaultCharSet = charSets.lowers + charSets.uppers + charSets.numbers;
  
  // This is the prompt for the user, whether to customize or not, and the "if not" to continue to build and output the password.
  var queryToCustomize = window.confirm("Would you like to customize the criteria?");
  if (!queryToCustomize) {
    for (let i=0; i<10; i++) {
      password = passwordBeingGenerated += defaultCharSet.charAt(Math.floor(Math.random() * defaultCharSet.length));
    };
    return password;
    return;
  };

  // These are the prompts and 'checkpoints' to see if the user's input meets the exercise criteria.
  // Prompt gives the variable a value, and the "ifs" below check it, output an appropriate error message, and even updates the box for better-clarity to the user.
  var prescribedPswdLength = window.prompt("How many characters should the password be? (8-128)");
  if (isNaN(prescribedPswdLength)) {
    password = "Error ... try again with a whole number for password length.";
    window.alert("Password length must be a whole number between 8 and 128.");
    return password;
    return;
  }
  if (prescribedPswdLength < 8) {
    password = "Try again with correct criteria. The requested length was too low.";
    window.alert("Password length must be 8 characters or more.");
    return password;
    return;
  };
  if (prescribedPswdLength >128) {
    password = "Try again with correct criteria. The requested length was too high.";
    window.alert("Password length must be 128 characters or fewer.");
    return password;
    return;
  };  

  // Creates an empty and buildable variable.  This is a long list of available characters from which to pull, randomly.
  var usedCharSet = "";

  // These are the user-given inputs, whether or not to use certain character sets.
  var useLowerCase = window.confirm("Use lower-case?");
  var useUpperCase = window.confirm("Use upper-case?");
  var useNumbers = window.confirm("Use numbers?");
  var useSymbols = window.confirm("Use symbols?");

  // These are the T/F "ifs," which will determine which sets to catenate to the 'usedCharSet' variable.
  if (useLowerCase) {usedCharSet += charSets.lowers};
  if (useUpperCase) {usedCharSet += charSets.uppers};
  if (useNumbers) {usedCharSet += charSets.numbers};
  if (useSymbols) {usedCharSet += charSets.symbols};

  // Safety mechanism, so that the program doesn't try to build something with no 'pieces.'
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
    password = "Try again with correct criteria. A character set must be used.";
    window.alert("A character set must be chosen. Try again.");
    return password;
    return;
  };

  // This is the ACTUAL PASSWORD GENERATOR, where the magic happens!
  for (let i=0; i<prescribedPswdLength; i++) {
    password = passwordBeingGenerated += usedCharSet.charAt(Math.floor(Math.random() * usedCharSet.length));
  }

  // The 'return' here is the output of this function.
  return password;
}

// This section was given.  It declares the output of the function; it also uses DOM to link it to HTML.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// This section was given.  It makes the "Generate Button" ready to be clicked and DO something.
generateBtn.addEventListener("click", writePassword);
