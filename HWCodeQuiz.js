//Variables
countdownEl = document.getElementsByTagName("h2") 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var h2El = document.getElementById("h2")
var username = prompt ("Enter your intials") 
var button1El = document.getElementById("button-1")
var button2El = document.getElementById("button-2")
var button3El = document.getElementById("button-3")
var button4El = document.getElementById("button-4")

// Added Event Listeners For Values of Buttons
button1El.addEventListener("click", function(event) {
    event.preventDefault()
    console.log(button1El.value)
})

button2El.addEventListener("click", function(event) {
    event.preventDefault()
    console.log(button2El.value)
    })

button3El.addEventListener("click", function(event) {
        event.preventDefault()
        console.log(button3El.value)
        })
        
 button4El.addEventListener("click", function(event) {
            event.preventDefault()
            console.log(button4El.value)
            })

         // Time Function 
 var secondsLeft = 180;

 function setTime() {
var timerInterval = setInterval(function() {
 secondsLeft--;
 timeEl.textContent = secondsLeft + " seconds left";
            
if(secondsLeft === 0) {
clearInterval(timerInterval);
                  
                }
            
              }, 1000);
            }
            
            setTime();
            
            // Trying to set up loop
for (let i=0 ; i < ArrayQuestions.length; i++) {
console.log (ArrayQuestions[i])
var button1El = document.getElementById(ArrayAnswers [i][0])
var button2El = document.getElementById(ArrayAnswers [i][1])
var button3El = document.getElementById(ArrayAnswers [i][2])
var button4El = document.getElementById(ArrayAnswers [i][3])

}
// Array Question and Array Answers
ArrayQuestions = {
    Question1:"Which isn't one of the three building blocks of coding?",
    Question2:"Which class haven't we done yet?",
    Question3:"Which isn't a main tag of HTML?",
}

ArrayAnswers = [
    ["Javascript","CSS","JQuery","HTML"],
    ["Intro to Web APIs","Intro to APIs and AJAX"," jQuery Begins","JavaScript Juggernauts"],
    ["Head","Body","Main","Href"],
    ];
