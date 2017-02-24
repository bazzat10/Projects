var boardGame = [['','',''],['','',''],['','','']];

var toggleBetweenPlayers = 0; //assign value for toggling;

var combineAllArrays = [];
var gameComplete = false; // validator - used to check if game is complete.
var creditCounter = 0;
var timerTicket;
var playerOneScore;
var playerTwoScore;


var creditedTo = ['SPECIAL THANKS TO....',
              'DANIEL TSUI (DT)',
              'KASUN MALDENI',
              '#FULLSLACK TEAM!',
              'AND....',
              'GOOGLE!',
              'barry™ PRODUCTION'];

var audioLevelComplete = function(){
  var audio = document.querySelector('.audio-level-complete');
  audio.play();
};

var audioJump = function(){
  var audio = document.querySelector('.audio-jump');
  audio.play();
};

var credits = function(){
  document.querySelector('body p').innerHTML = creditedTo[creditCounter];
  creditCounter++;
  if(creditCounter === creditedTo.length){
    clearInterval(timerTicket);
  };
};

var creditsTimer = function(){
  timerTicket = setInterval(credits, 5000);
};

var selectedBox = function (row, column){
  if(toggleBetweenPlayers === 0){ // used to toggle between players
    boardGame[row][column] = 2;
    toggleBetweenPlayers = 1; // assign to player two
  } else {
    boardGame[row][column] = 3;
    toggleBetweenPlayers = 0; // assign to player one
  };

};

var endOfGame = function(){ // deletes div inside of the body and creates new div
  audioLevelComplete();

  document.querySelector("body div").remove();
  var newDiv = document.createElement('DIV');
  var newH1 = document.createElement('H1');
  var newButton = document.createElement('BUTTON');
  var newParagraph = document.createElement('P');
  document.querySelector('body').appendChild(newDiv);
  document.querySelector('body div').className = 'end-game';
  document.querySelector('body div').appendChild(newH1);
  document.querySelector('body h1').innerHTML = 'GAME OVER';
  document.querySelector('body div').appendChild(newButton);
  document.querySelector('body div').appendChild(newParagraph); // create new paragraphs
  document.querySelector('body button').innerHTML = 'PLAY AGAIN';
  document.querySelector('body button').className = 'play-again-btn';

  setTimeout(creditsTimer, 500);

  document.querySelector('.play-again-btn').addEventListener('click', function(){
    playerOneScore = localStorage.getItem('playerOneScore');
    playerTwoScore = localStorage.getItem('playerTwoScore');
    location.reload();
  });
};


var winner = function(winningPlayer){ // announce Winner
  gameComplete = true;
  if(winningPlayer === 0){
    document.querySelector("body h1").innerHTML = "PLAYER ONE WINS"
    setTimeout(endOfGame,1000);
  } else if(winningPlayer === 1){
    document.querySelector("body h1").innerHTML = "PLAYER TWO WINS";
    setTimeout(endOfGame,1000);
  };
};

var checkIfPlayerOneIsWinner = function(){
  if(checkWinner(6)){ // if statement calls function and check if it is true
    winner(0);
    playerOneScore =+ 1;
    document.querySelector('.p1-scoreboard').innerHTML = playerOneScore;
    localStorage.setItem('playerOneScore', playerOneScore);
    return; // used RETURN to exit the function without calling the next function in line checkIfPlayerTwoIsWinner
  };
  checkIfPlayerTwoIsWinner();
};


var checkIfPlayerTwoIsWinner = function (){
  if (checkWinner(9)) { // if value 9 is passed through and if condition is true it will enter if statement.
    winner(1);
    playerTwoScore =+ 1;
    localStorage.setItem('playerTwoScore',playerTwoScore);
    document.querySelector('.p2-scoreboard').innerHTML = playerTwoScore;
    return; // exits function if player two is winner and will NOT call next function.
  };
  checkingIfTieGame();
};

var checkWinner = function(score) {
  if(boardGame[0][0] + boardGame[0][1] + boardGame[0][2] === score ||
     boardGame[1][0] + boardGame[1][1] + boardGame[1][2] === score ||
     boardGame[2][0] + boardGame[2][1] + boardGame[2][2] === score ||
     boardGame[0][0] + boardGame[1][0] + boardGame[2][0] === score ||
     boardGame[0][1] + boardGame[1][1] + boardGame[2][1] === score ||
     boardGame[0][2] + boardGame[1][2] + boardGame[2][2] === score ||
     boardGame[0][0] + boardGame[1][1] + boardGame[2][2] === score ||
     boardGame[2][0] + boardGame[1][1] + boardGame[0][2] === score ){
     return true
  };
};

var checkingIfTieGame = function(){ // checking if tie game
  var array1 = boardGame[0];
  var array2 = boardGame[1];
  var array3 = boardGame[2]

  combineAllArrays = array1.concat(array2, array3);

  for(var counter = 0; counter<combineAllArrays.length; counter++){
    if(combineAllArrays[counter] === ''){
      return; // exits function if there is an empty array.
    };
  };

  document.querySelector("body h1").innerHTML = "TIE GAME"; // will display if all arrays are filled.
  setTimeout(endOfGame,1000);

};


var assignValueToArray = function(idName){

  switch(idName) {
    case 'row0-column0':
      selectedBox(0,0);
      break;
    case 'row0-column1':
      selectedBox(0,1);
      break;
    case 'row0-column2':
      selectedBox(0,2);
      break;
    case 'row1-column0':
      selectedBox(1,0);
      break;
    case 'row1-column1':
      selectedBox(1,1);
      break;
    case 'row1-column2':
      selectedBox(1,2);
      break;
    case 'row2-column0':
      selectedBox(2,0);
      break;
    case 'row2-column1':
      selectedBox(2,1);
      break;
    case 'row2-column2':
      selectedBox(2,2);
      break;
 };
};


var captureEvent = function(event){

  var x = event.target;

  if(x.src === '' && !gameComplete){ // if box is empty AND that it i NOT True. (if(!gameComplete) if game is NOT true keep doing this.
        audioJump();

        if(toggleBetweenPlayers === 0){
          x.src = 'Images/mario.gif';
        };

        if(toggleBetweenPlayers ===  1){
          x.src = 'Images/luigi.gif';
        };

        idName = x.id;

        assignValueToArray(idName);

        checkIfPlayerOneIsWinner();
    };
};


document.querySelector('.board-game').addEventListener('click', captureEvent); // captures the event and calls the function campture event.

document.querySelector('.start-btn').addEventListener('click', function(){
  document.querySelector('.start-page').remove();
})
