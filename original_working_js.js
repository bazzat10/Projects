console.log('JAVASCRIPT WORKING FOR PR0JECT 1 - TIC TAC TOE');
var boardGame = [['','',''],['','',''],['','','']];

var toggle = 0; //assign value for toggling;

var combineAllArrays = [];

var creditCounter = 0;
var timerTicket;

var creditedTo = ['SPECIAL THANKS TO....',
              'DANIEL TSUI (DT)',
              'KASUN MALDENI',
              '#FULLSLACK TEAM!',
              'AND....',
              'GOOGLE!',
              'barry™ PRODUCTION'];

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
  if(toggle === 0){ // used to toggle between players
    boardGame[row][column] = 2;
    toggle = 1; // assign to player two
  } else {
    boardGame[row][column] = 3;
    toggle = 0; // assign to player one
  };

};

var endOfGame = function(){ // deletes page and creates new page
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
    location.reload();
  })


};

var winner = function(winningPlayer){ // announce Winner
  if(winningPlayer === 0){

    document.querySelector("body h1").innerHTML = "PLAYER ONE WINS"
    setTimeout(endOfGame,1000);

  };

  if(winningPlayer === 1){

    document.querySelector("body h1").innerHTML = "PLAYER TWO WINS";
    setTimeout(endOfGame,1000);

  };

};



var checkIfPlayerOneIsWinner = function (){
  if( boardGame[0][0] + boardGame[0][1] + boardGame[0][2] === 6 ||
      boardGame[1][0] + boardGame[1][1] + boardGame[1][2] === 6 ||
      boardGame[2][0] + boardGame[2][1] + boardGame[2][2] === 6 ||
      boardGame[0][0] + boardGame[1][0] + boardGame[2][0] === 6 ||
      boardGame[0][1] + boardGame[1][1] + boardGame[2][1] === 6 ||
      boardGame[0][2] + boardGame[1][2] + boardGame[2][2] === 6 ||
      boardGame[0][0] + boardGame[1][1] + boardGame[2][2] === 6 ||
      boardGame[2][0] + boardGame[1][1] + boardGame[0][2] === 6 ){

      winner(0);

  };

  checkIfPlayerTwoIsWinner();

};

var checkIfPlayerTwoIsWinner = function (){
  if( boardGame[0][0] + boardGame[0][1] + boardGame[0][2] === 9 ||
      boardGame[1][0] + boardGame[1][1] + boardGame[1][2] === 9 ||
      boardGame[2][0] + boardGame[2][1] + boardGame[2][2] === 9 ||
      boardGame[0][0] + boardGame[1][0] + boardGame[2][0] === 9 ||
      boardGame[0][1] + boardGame[1][1] + boardGame[2][1] === 9 ||
      boardGame[0][2] + boardGame[1][2] + boardGame[2][2] === 9 ||
      boardGame[0][0] + boardGame[1][1] + boardGame[2][2] === 9 ||
      boardGame[2][0] + boardGame[1][1] + boardGame[0][2] === 9 ){
      winner(1);
      };

  checkingIfTieGame();
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

document.querySelector("#row0-column0").addEventListener('click', function(){

  if(document.querySelector('#row0-column0').src === ''){
      if(toggle === 0){
          document.querySelector('#row0-column0').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row0-column0').src = 'Images/luigi.gif';
      };

      selectedBox(0,0);

      checkIfPlayerOneIsWinner();

  };


});

document.querySelector('#row0-column1').addEventListener('click', function(event){

  if(document.querySelector('#row0-column1').src === ''){
    if(toggle === 0){
      document.querySelector('#row0-column1').src = 'Images/mario.gif';
    };

    if(toggle ===  1){
      document.querySelector('#row0-column1').src = 'Images/luigi.gif';
    };

    selectedBox(0,1);
    checkIfPlayerOneIsWinner();
  };


});

document.querySelector('#row0-column2').addEventListener('click', function(){

  if(document.querySelector('#row0-column2').src === ''){
      if(toggle === 0){
        document.querySelector('#row0-column2').src = 'Images/mario.gif';  //  console.log('going into toggle');
      };

      if(toggle ===  1){
        document.querySelector('#row0-column2').src = 'Images/luigi.gif';
      };
  };

  selectedBox(0,2)
  checkIfPlayerOneIsWinner();
});


// Event Listener row 1;


document.querySelector('#row1-column0').addEventListener('click', function(){

  if(document.querySelector('#row1-column0').src === ''){
      if(toggle === 0){
        document.querySelector('#row1-column0').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row1-column0').src = 'Images/luigi.gif';
      };

      selectedBox(1,0);
      checkIfPlayerOneIsWinner();
  };
});

document.querySelector('#row1-column1').addEventListener('click', function(){

  if(document.querySelector('#row1-column1').src === ''){
      if(toggle === 0){
        document.querySelector('#row1-column1').src = 'Images/mario.gif';
      };


      if(toggle ===  1){
        document.querySelector('#row1-column1').src = 'Images/luigi.gif';
      };

  selectedBox(1,1);
  checkIfPlayerOneIsWinner();

  };
});

document.querySelector('#row1-column2').addEventListener('click', function(){

  if(document.querySelector('#row1-column2').src === ''){
      if(toggle === 0){
        document.querySelector('#row1-column2').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row1-column2').src = 'Images/luigi.gif';
      };

      selectedBox(1,2);
      checkIfPlayerOneIsWinner();
  };
});

// Event Listener for row 2;

document.querySelector('#row2-column0').addEventListener('click', function(){

  if(document.querySelector('#row2-column0').src === ''){
      if(toggle === 0){
        document.querySelector('#row2-column0').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row2-column0').src = 'Images/luigi.gif';
      };

      selectedBox(2,0);
      checkIfPlayerOneIsWinner();
  };
});

document.querySelector('#row2-column1').addEventListener('click', function(){

  if(document.querySelector('#row2-column1').src === ''){
      if(toggle === 0){
        document.querySelector('#row2-column1').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row2-column1').src = 'Images/luigi.gif';
      };

      selectedBox(2,1);
      checkIfPlayerOneIsWinner();
  };
});

document.querySelector('#row2-column2').addEventListener('click', function(){

  if(document.querySelector('#row2-column2').src === ''){
      if(toggle === 0){
        document.querySelector('#row2-column2').src = 'Images/mario.gif';
      };

      if(toggle ===  1){
        document.querySelector('#row2-column2').src = 'Images/luigi.gif';
      };

      selectedBox(2,2);
      checkIfPlayerOneIsWinner();
  };
});

document.querySelector('.start-btn').addEventListener('click', function(){
  document.querySelector('.start-page').remove();
})
