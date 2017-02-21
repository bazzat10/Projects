console.log('JAVASCRIPT WORKING FOR PR0JECT 1 - TIC TAC TOE');
var boardGame = [["","",""],["","",""],["","",""]];

var playerOne;
var playerTwo;

var toggle = 0; //assign value for toggling;

var selectedBox = function (row, column){
  if(toggle === 0){ // used to toggle between player one and two
    boardGame[row][column] = 2;
    toggle = 1;
  } else {
    boardGame[row][column] = 3;
    toggle = 0;
  };

};


var winner = function(winningPlayer){
  if(winningPlayer === 0){
    document.querySelector("body div").remove();
    var newDiv = document.createElement('div');
    var newDivChild = document.createElement('h1');
    document.querySelector("body").appendChild(newDiv);
    document.querySelector("body div").appendChild(newDivChild);
    document.querySelector("body div").innerHTML = "PLAYER ONE WINS";
  };

  if(winningPlayer === 1){
    document.querySelector("body div").remove();
    var newDiv = document.createElement('div');
    var newDivChild = document.createElement('h1');
    document.querySelector("body").appendChild(newDiv);
    document.querySelector("body div").appendChild(newDivChild);
    document.querySelector("body div").innerHTML = "PLAYER TWO WINS";
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


var checkWinner = function(){
  checkIfPlayerOneIsWinner();
  checkIfPlayerTwoIsWinner();
};

// Event Listener - row 0 ;

document.querySelector('#row0Column0').addEventListener('click', function(){
  document.querySelector('#row0Column0').disabled = true;
  if(toggle === 0){

    document.querySelector('#row0Column0').style.backgroundColor = 'red';

  };

  if(toggle ===  1){
    document.querySelector('#row0Column0').style.backgroundColor = 'blue';
  };

//  toggleBetweenPlayers();
  selectedBox(0,0);
  checkWinner();

});

document.querySelector('#row0Column1').addEventListener('click', function(){
  document.querySelector('#row0Column1').disabled = true;
  if(toggle === 0){
    document.querySelector('#row0Column1').style.backgroundColor = 'red';
  };

  if(toggle ===  1){
    document.querySelector('#row0Column1').style.backgroundColor = 'blue';
  };

//  toggleBetweenPlayers();
  selectedBox(0,1);
  checkWinner();
});

document.querySelector('#row0Column2').addEventListener('click', function(){
  document.querySelector('#row0Column2').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row0Column2').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row0Column2').style.backgroundColor = 'blue';
  };
//  toggleBetweenPlayers();
  selectedBox(0,2)
  checkWinner();
});


// Event Listener row 1;


document.querySelector('#row1Column0').addEventListener('click', function(){
  document.querySelector('#row1Column0').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row1Column0').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row1Column0').style.backgroundColor = 'blue';
  };

  //toggleBetweenPlayers();
  selectedBox(1,0);
  checkWinner();

});

document.querySelector('#row1Column1').addEventListener('click', function(){
  document.querySelector('#row1Column1').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row1Column1').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row1Column1').style.backgroundColor = 'blue';
  };

//  toggleBetweenPlayers();
  selectedBox(1,1);
  checkWinner();

});

document.querySelector('#row1Column2').addEventListener('click', function(){
  document.querySelector('#row1Column2').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row1Column2').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row1Column2').style.backgroundColor = 'blue';
  };
//  toggleBetweenPlayers();
  selectedBox(1,2);
  checkWinner();

});

// Event Listener for row 2;

document.querySelector('#row2Column0').addEventListener('click', function(){
  document.querySelector('#row2Column0').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row2Column0').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row2Column0').style.backgroundColor = 'blue';
  };
//  toggleBetweenPlayers();
  selectedBox(2,0);
  checkWinner();

});

document.querySelector('#row2Column1').addEventListener('click', function(){
  document.querySelector('#row2Column1').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row2Column1').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row2Column1').style.backgroundColor = 'blue';
  };
//  toggleBetweenPlayers();
  selectedBox(2,1);
  checkWinner();

});

document.querySelector('#row2Column2').addEventListener('click', function(){
  document.querySelector('#row2Column2').disabled = true;
  if(toggle === 0){
    // document.querySelector('#row0Column0').style.backgroundImage = "url('Images/mario.gif')";
    document.querySelector('#row2Column2').style.backgroundColor = 'red';
  //  console.log('going into toggle');
  };

  if(toggle ===  1){
    document.querySelector('#row2Column2').style.backgroundColor = 'blue';
  };
//  toggleBetweenPlayers();
  selectedBox(2,2);
  checkWinner();

});
