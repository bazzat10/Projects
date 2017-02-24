# PROJECT 1 - Introducing NIN TEN DOE - aka (TIC TAC TOE)

### TECHNOLOGIES USED

###### NIN TEN DOE was written in native Javascript, CSS and HTML.


### APPROACH

* ##### THE GAME
  *  I *opted* for the recommended game - TIC TAC TOE as this allowed me to dive straight into brainstorming possible themes for the game.

  * I rely mostly on my experiences to be creative. I am a *casual* gamer and when I play, it is mostly with Nintendo Consoles. Hence - Super Mario themed TIC TAC TOE.

* ##### DESIGN
  * Initial Sketches
    * Heading - centered and top
    * Player One and Player Two - top left and right corner.
    * Players to choose a list of character - Mario, Luigi, Toad, Princess Peach
    * 9 boxes = 3 x 3
    * Board game = The 9 boxes to be separated by *jpeg/png* images of bricks from Super Mario
    * ['VIEW Initial sketch of the board game'](https://github.com/bazzat10/Projects/blob/master/Images/Draft1.jpg)<br>
    <br>
  * Final Design
    * FIRST PAGE: See-through page with START BUTTON
    ![Start Page](https://github.com/bazzat10/Projects/blob/master/Images/start.png)
    * GAME PLAY - Heading centered and on top
    * Player One / Player Two - top left and right corner.
    * Player One - Mario / Player Two - Luigi
    * 9 boxes - 3 x 3
    ![During Game Play](github.com/bazzat10/Projects/blob/master/Images/gameplay.png)
    * END GAME - Heading GAME OVER centered on top
    * Button PLAY AGAIN centered
    * Credits rolling ![End of Game](github.com/bazzat10/Projects/blob/master/Images/endgame.png)


### FUNCTION - SOLUTION

My best approach to this game was writing it in native Javascript, as I was more confident using it in manipulating the DOM than JQUERY.

**DETERMINING THE WINNER** - There are 8 possible ways for a player to win in this game - either HORIZONTAL (rows), vertical (Columns) or in DIAGONAL.

When a player selects a box, a *value* will be stored in a variable of ARRAYS. When *Player One* selects a box - a value of 2 will be stored in the corresponding ARRAY.

For Example: PLAYER ONE selects the top left corner, then PLAYER TWO Selects the middles box.

**PLAYER ONE - A value of 3 is inserted into the array.**
**PLAYER TWO - A value of 3 is inserted into the array.**

![Diagram 1](github.com/bazzat10/Projects/blob/master/Images/diagram1.png)

After each move by the player - a function(code) runs by adding the numbers together -  diagonally, horizontally and vertically. Another function(code) than compares if the SUM of the values ADD up to either **6** or **9**. If the SUM add up to **6** PLAYER ONE wins. If the values add up to **9** PLAYER TWO wins.

REMEMBER that each time Player One selects a box, a value of 2, gets inserted into the array. PLAYER TWO inserts the value 3.

examples:

![Diagram 2](github.com/bazzat10/Projects/blob/master/Images/diagram2.png)

### DIARY LOG
###### Tuesday 21/02/17
  * Pick Game - TIC TAC TOE.
  * Pick theme - SUPER MARIO - Nintendo Theme - download background pics / gif images.
  * Work out solution - step by step process in determining winner of the Game.
  * Work out how to toggle between player 1 and player 2.
  * Determine technologies to use - native Javascript / CSS / HTML.
  * Start coding - Main function completed: Output - winner of game.
  * END GAME Page - Rolling Credits / **PLAY AGAIN** button working.

###### Wednesday 22/02/17
  * Bug fixes - DISABLED the ability to RE-SELECT a box. Once image and value is inserted a player can no longer changes its value until game is restarted.
  * Add front layer with START BUTTON.
  * Shorten the code for credit appearance.
  * updated CSS!!!!.

###### Thursday 23/02/17
  * Shorten code (DRYer approach). Deleted repetitive functions with the use of boolean statements. ['View Original Code'](github.com/bazzat10/Projects/blob/master/original_working_js.js)
  * Bug Fixes - DISABLED the ability to SELECT a box once there is a winner. Due to my TIMER DELAY, this needed to be done.
  * Bug Fixes - Player is now announced WINNER if they win on the last box. NO Longer show TIE GAME. Used *return* to immediately exit the function.

###### Friday 24/02/17
  * TRY implementing a working scoreboard.


### UNRESOLVED ISSUES
* Shorten code - DRYer. Make the code flow more efficient.
* CSS Bugs!!!!
* Scoreboard.


### FUTURE PLANS
* Implement the ability for players to select different characters.
* A working scoreboard.
* Sound effects.


### GAME RULES

NIN TEN DOE is a Nintendo themed game based on **TIC TAC TOE** aka **'noughts and crosses'**.

**NIN TEN DOE** is a game for two players, Player One as **Mario** and Player Two as **Luigi**, Players take turns marking the empty spaces with their characters in a 3×3 grid. The player who succeeds in placing three of their *characters* in a horizontal, vertical, or diagonal wins the game.


### PLAY --->['NIN TEN DOE'](https://bazzat10.github.io/Projects/)

barry™ PRODUCTION
