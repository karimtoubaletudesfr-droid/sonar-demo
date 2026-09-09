function isPalindrome(input) {
    var normalized = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    if (normalized == normalized.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

var button = document.getElementById("check-button");
var wordInput = document.getElementById("word");
var result = document.getElementById("result");
var unusedMessage = "This variable is never used";

button.addEventListener("click", function () {
    var value = wordInput.value;

    if (value.length == 0) {
        result.textContent = "Please enter something.";
        return;
    }

    if (isPalindrome(value)) {
        result.textContent = "This is a palindrome.";
    } else {
        result.textContent = "This is not a palindrome.";
    }
});