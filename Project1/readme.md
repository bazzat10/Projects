# PROJECT 1 - Introducing NIN TEN DOE - aka (TIC TAC TOE)

### TECHNOLOGIES USED

###### NIN TEN DOE was written in native Javascript, CSS and HTML.


### APPROACH

* ##### THE GAME
  *  I *opted* for the recommended game - TIC TAC TOE. As this allowed me to dive straight into brainstorming possible themes for the game.

  * I rely mostly on my experiences to be creative. I am a *casual* gamer and when I play, it is mostly with Nintendo Consoles. Hence - Super Mario themed TIC TAC TOE.

* ##### DESIGN
  * Initial sketches on paper
    * Heading centered and on top
    * Player One / Player Two - top left and right corner.
    * Players to choose a list of character - Mario, Luigi, Toad, Princess Peach
    * 9 boxes = 3 x 3
    * Board game = The 9 boxes to be separated by *jpeg/png* images of bricks from Super Mario
    * Initial sketch of the board game - A [link](Images/Draft1.jpg"draft").

  * FINAL DESIGN
    * FIRST PAGE - See Through - with START BUTTON  
      * A [link](Images/start.png"start").
    * GAME PLAY - Heading Centered and on top
    * Player One / Player Two - top left and right corner.
    * Player One - Mario / Player Two - Luigi
    * 9 boxes - 3 x 3
      *  A [link](Images/gameplay.png"gameplay").
    * END GAME - Heading GAME OVER centered on top
    * Button PLAY AGAIN centered
    * Credits rolling
      *  A [link](Images/endgame.jpg"endgame").


### FUNCTION - SOLUTION
##### My best approach to this game was writing it in native Javascript, as I was more confident using it in manipulating the DOM than JQUERY.

##### DETERMINING THE WINNER - There are 8 possible ways for a player to win in this game - either ROWS / COLUMNS or DIAGONALLY.
##### When a player selects a box, a *value* will be stored in a variable of (ARRAY of ARRAYS). When Player One selects a box - a value of 2 will be stored in the corresponding ARRAY.
######## For Example: PLAYER ONE selects the top left corner, then PLAYER TWO Selects the middles box.

PLAYER ONE inserts a value of 2.
PLAYER 2 inserts a value of 3.


                   2  |      |            
                 -----|------|-----
                      |  3   |
                 -----|------|-----
                      |      |

                   2  |   2  |
                 -----|------|-----
                      |  3   |
                 -----|------|-----
                      |      |


After each move by the player the code run by adding the numbers together diagonally, horizontally and vertically, and checks if the numbers ADD up to either 6 or 9. If the numbers add to 6 PLAYER ONE wins. IF the numbers add to 9 PLAYER TWO wins. REMEMBER that each time Player One selects a box, the value 2, gets inserted into the array. PLAYER TWO inserts the value 3.


                   2  |   2  |  2   = 6 (PLAYER ONE WINS)
                 -----|------|-----
                      |  3   |  3
                 -----|------|-----
                      |      |






# DIARY LOG
###### Tuesday 21/02/17
  * Pick Game
  * Pick theme - download background pics / gif images
  * step by step to determining solution - outcome - winner
  * Start coding - main function working: outcome - winner
  * END GAME Page - main function completed. Credits / Play Again button working
###### Wednesday 22/02/17
  * Bug fixes - disabling player to change image on a box.
  * Add front layer with START BUTTON
  * Shorten the code for credit appearance.
  * fixing CSS!!!!
###### Thursday 2302/17



# UNRESOLVED ISSUES
* In initial plan - players able to select their own character from a list. exampled. Toad / Mario / Luigi / Princess Peach.
* Shorten code. I can make all the functions work. HOWEVER I have trouble shortening my code, or finding more efficient way.




technologies used, the approach taken, installation instructions, unsolved problems, etc.






#GAME RULES
###### NIN TEN DOE is a Nintendo themed game based on **TIC TAC TOE** aka **'noughts and crosses'**.

###### NINTENDOE is a game for two players, Player One as **Mario** and Player Two as **Luigi**, Players take turns marking the empty spaces with their characters in a 3×3 grid. The player who succeeds in placing three of their *characters* in a horizontal, vertical, or diagonal row wins the game.


###[PLAY 'NIN TEN DOE'](https://bazzat10.github.io/Projects/Project1/)
