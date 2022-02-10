var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event)
{
    console.log(event);
    var contant = event.results[0][0].transcript;
    console.log(contant);
    document.getElementById("textbox").innerHTML = contant;
}