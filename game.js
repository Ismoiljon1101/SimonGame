// alert("I am working man!")
var gamePattern = [];
var randomNumber = Math.floor(Math.random() * 3 );
function nextSequence(){
 
// alert(randomNumber);
var randomNumber = Math.floor(Math.random() * 3 );
}
nextSequence();

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[randomNumber];
// gamePattern.push(randomChosenColour)

console.log(randomChosenColour); 
gamePattern.push(randomChosenColour);

$("#green").ready(function() {
    $("#green").click(function() {
        $(this).animate({ opacity: 0.5 }, 200, function() {
            $(this).animate({ opacity: 1.0 }, 200);
            var clickSound = new Audio('sounds/green.mp3');
            clickSound.play();
        });
    });
});
$("#yellow ").ready(function() {
    $("#yellow ").click(function() {
        $(this).animate({ opacity: 0.5 }, 200, function() {
            $(this).animate({ opacity: 1.0 }, 200);
            var clickSound = new Audio('sounds/yellow.mp3');
            clickSound.play();
        });
    });
});
$("#red ").ready(function() {
    $("#red ").click(function() {
        $(this).animate({ opacity: 0.5 }, 200, function() {
            $(this).animate({ opacity: 1.0 }, 200);
            var clickSound = new Audio('sounds/red.mp3');
            clickSound.play();
        });
    });
});
$("#blue").ready(function() {
    $("#blue").click(function() {
        $(this).animate({ opacity: 0.5 }, 200, function() {
            $(this).animate({ opacity: 1.0 }, 200);
            var clickSound = new Audio('sounds/blue.mp3');
            clickSound.play();
        });
    });
});