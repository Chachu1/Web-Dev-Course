
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$('.btn').on('click', function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})


$(document).keypress(function() {
    if (!started) {  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function nextSequence() {

    userClickedPattern = [];
    level++;
    $('#level-title').text('Level '+ level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
    var activeButton = "#"+currentColour
    $(activeButton).addClass("pressed");
    setTimeout(function(){
        $(activeButton).removeClass("pressed");
    },100);
    
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log('sucess');
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3")
        audio.play();
        $('body').addClass('game-over');
        setTimeout(() => $('body').removeClass('game-over'), 200);
        $("#level-title").text('Game Over, Press Any Key to Restart');
        startOver();

    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;

}