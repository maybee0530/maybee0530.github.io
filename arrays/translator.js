var submitbutton = document.querySelector("#textSubmit");
var textfield = document.querySelector("#enteredText");

submitbutton.addEventListener("click", report);

function report(e) {
    e.preventDefault();
    var word = String(textfield.value);
    console.log(word);
}