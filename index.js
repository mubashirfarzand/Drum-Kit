var numbersoftime = document.querySelectorAll(".drum").length;
console.log(numbersoftime);

var i = 0;

while (i < numbersoftime){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttoninnerHTML = this.innerHTML;
    makeSoung(buttoninnerHTML);
    buttonaAimation(buttoninnerHTML);
    });
    
    i++;
}


document.addEventListener("keypress", function(event){
    makeSoung(event.key);

    buttonaAimation(event.key); 

});



function makeSoung(key){
    switch (key) {
        case "w":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        default: console.log(buttoninnerHTML);
            break;
    }
}


function buttonaAimation(currentKey) {

    var activeButton = document.querySelector("."+currentKey)
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


// function buttonAnimation(currentKey) {

//     var activeButton = document.querySelector("." + currentKey);
  
//     activeButton.classList.add("pressed");
  
//     setTimeout(function() {
//       activeButton.classList.remove("pressed");
//     }, 100);
  
//   }
  






















// for (i = 0; i < numbersoftime ; i ++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     });
// }


