// sound for clicking buttons normally
var buttonforward = new Audio('sounds/forward2.mp3');
buttonforward.volume = 0.1;

// sound for correction buttons
var buttonback = new Audio('sounds/back.mp3');
buttonback.volume = 0.1;

// play sound when button is clicked
$("button.forward.bank-button").on("click", function(){
    buttonforward.play();
});

// play sound when button is clicked for when correction
$("button.back.bank-button").on("click", function(){
    buttonback.play();
});

