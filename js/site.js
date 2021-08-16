// Get the values from the page
// Get the string
// Controller Function
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;
    
    let revString = reverseString(userString);
    
    displayString(revString);
}

// Reverse the string
// Logic Function
function reverseString(userString) {
    
    let revString = [];

    // reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;    
}

// Display the reversed string to the user
// View Function
function displayString(revstring) {
    // write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}