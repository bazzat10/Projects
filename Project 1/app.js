console.log('JAVASCRIPT WORKING FOR PR0JECT 1 - TIC TAC TOE');
var boardGame = [['','',''],['','',''],['','','']];

var playerOne;
var playerTwo;

var toggle = 0; //assign value for toggling;

var combineAllArrays = [];



var selectedBox = function (row, column){
  if(toggle === 0){ // used to toggle between players
    boardGame[row][column] = 2;
    toggle = 1;
  } else {
    boardGame[row][column] = 3;
    toggle = 0;
  };

};

// var announceWinner = function(){
//   var newH1Element = document.createElement('h2');
//   document.querySelector("body").appendChild(newH1Element);
// };



var endOfGame = function(){
  document.querySelector("body div").remove(); // deletes page
  var newDiv = document.createElement('DIV');
  var newDivH1 = document.createElement('H1');
  var newDivButton = document.createElement('BUTTON');
  document.querySelector("body").appendChild(newDiv);
  document.querySelector('body div').className = 'end-game';
  document.querySelector("body div").appendChild(newDivH1);
  document.querySelector("body h1").innerHTML = "GAME OVER"
  document.querySelector("body div").appendChild(newDivButton);
  document.querySelector('body button').innerHTML = 'PLAY AGAIN';
  document.querySelector('body button').className = 'play-again-btn'

  document.querySelector('.play-again-btn').addEventListener('click', function(){
    location.reload();
  })
};

var winner = function(winningPlayer){
  if(winningPlayer === 0){
    // announceWinner();
    document.querySelector("body h1").innerHTML = "PLAYER ONE WINS"
    setTimeout(endOfGame,10000);
  };

  if(winningPlayer === 1){
    endOfGame();
    document.querySelector("body h1").innerHTML = "PLAYER TWO WINS";
    setTimeout(endOfGame,10000);
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
};

var checkingIfTieGame = function(){
  console.log('checking if tie game function ');
  var array1 = boardGame[0];
  var array2 = boardGame[1];
  var array3 = boardGame[2]

  combineAllArrays = array1.concat(array2, array3);

  for(var counter = 0; counter<combineAllArrays.length; counter++){
    if(combineAllArrays[counter] === ''){
      return;
    };
  };

  document.querySelector("body h1").innerHTML = "TIE GAME";
  setTimeout(endOfGame,10000);
};

var checkWinner = function(){
  checkIfPlayerOneIsWinner();
  checkIfPlayerTwoIsWinner();
  checkingIfTieGame();
};

// Event Listener - row 0 ;

document.querySelector("#row0-column0").addEventListener('click', function(){
  document.querySelector("#row0-column0").disabled = true;
  if(toggle === 0){
      document.querySelector('#row0-column0').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row0-column0').src = 'Images/luigi.gif';
  };

  selectedBox(0,0);
  checkWinner();

});

document.querySelector('#row0-column1').addEventListener('click', function(){
  document.querySelector('#row0-column1').disabled = true;
  if(toggle === 0){
    document.querySelector('#row0-column1').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row0-column1').src = 'Images/luigi.gif';
  };

  selectedBox(0,1);
  checkWinner();
});

document.querySelector('#row0-column2').addEventListener('click', function(){
  document.querySelector('#row0-column2').disabled = true;
  if(toggle === 0){
    document.querySelector('#row0-column2').src = 'Images/mario.gif';  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row0-column2').src = 'Images/luigi.gif';
  };
//  toggleBetweenPlayers();
  selectedBox(0,2)
  checkWinner();
});


// Event Listener row 1;


document.querySelector('#row1-column0').addEventListener('click', function(){
  document.querySelector('#row1-column0').disabled = true;

  if(toggle === 0){
    document.querySelector('#row1-column0').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row1-column0').src = 'Images/luigi.gif';
  };

  selectedBox(1,0);
  checkWinner();

});

document.querySelector('#row1-column1').addEventListener('click', function(){
  document.querySelector('#row1-column1').disabled = true;
  if(toggle === 0){
    document.querySelector('#row1-column1').src = 'Images/mario.gif';
  };


  if(toggle ===  1){
    document.querySelector('#row1-column1').src = 'Images/luigi.gif';
  };

  selectedBox(1,1);
  checkWinner();

});

document.querySelector('#row1-column2').addEventListener('click', function(){
  document.querySelector('#row1-column2').disabled = true;
  if(toggle === 0){
    document.querySelector('#row1-column2').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row1-column2').src = 'Images/luigi.gif';
  };

  selectedBox(1,2);
  checkWinner();

});

// Event Listener for row 2;

document.querySelector('#row2-column0').addEventListener('click', function(){
  document.querySelector('#row2-column0').disabled = true;
  if(toggle === 0){
    document.querySelector('#row2-column0').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row2-column0').src = 'Images/luigi.gif';
  };

  selectedBox(2,0);
  checkWinner();

});

document.querySelector('#row2-column1').addEventListener('click', function(){
  document.querySelector('#row2-column1').disabled = true;
  if(toggle === 0){
    document.querySelector('#row2-column1').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row2-column1').src = 'Images/luigi.gif';
  };

  selectedBox(2,1);
  checkWinner();

});

document.querySelector('#row2-column2').addEventListener('click', function(){
  document.querySelector('#row2-column2').disabled = true;
  if(toggle === 0){
    document.querySelector('#row2-column2').src = 'Images/mario.gif';
  };

  if(toggle ===  1){
    document.querySelector('#row2-column2').src = 'Images/luigi.gif';
  };

  selectedBox(2,2);
  checkWinner();

});
