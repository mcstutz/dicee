# dicee

Dicee JavaScript challenge for an online class.

Click on "Refresh Me" and the dice changes and is compared with the winner and a flag displayed.

The challenge was to take a skeleton HTML and CSS with six images of dice and write the code so that the image of the dice changes
and declares a winner.  Also, you had to add a picture of a flag next to the winner.

My solution was to randomly roll 1-6 and change the last digit of the file name of the image to change the display of the dice.

To show the flag for the winner, I intially hid the two flags from the HTML.  When a player wins, the flag of the winner's side property
is set to visable and the loser is set to hidden.  When there is a draw, both flags are hidden.

The message "Refresh Me" is changed to either "Player 1 Wins!", "Player 2 Wins!" or "Draw."
