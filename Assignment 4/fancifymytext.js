
function enlarge()
{
    document.getElementById("userInputTextArea").style.fontSize = "4em";
}

function addStyles()
{
    document.getElementById("userInputTextArea").style.color = "Blue";
    document.getElementById("userInputTextArea").style.textDecoration = "underline";
}

function removeStyles()
{
    document.getElementById("userInputTextArea").style.color = "Black";
    document.getElementById("userInputTextArea").style.textDecoration = "none";

}

function uppercase()
{
    var input = document.getElementById("userInputTextArea");
    input = input.value.toUpperCase();
    var parts = input.split(".");
    input = parts.join("-Moo.");
    document.getElementById("userInputTextArea").value = input;
}