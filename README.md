# hangman-game
A simple Hangman Game.

## Purpose

This is a coding practice application, *intended for Code Clubs*.


## Details

### Actions

1. User Actions
	- User can guess letters in the phrase by typing on the keyboard
	- User can reset the game

2. App Actions	
	- At the start of a game, App will get a phrase from the internet, and display it with all letters hidden
	- App will update the phrase appearance by revealing letters, as they are correctly guessed
	- App will ignore non letter keys, and ignore case
	- App will show the number of guesses left
	- App will decrement (count down) the number of guesses each time a letter is guessed
	- When the phrase is revealed the app will stop accepting guesses
	- When the remaining guesses reaches 0 the app will stop accepting guesses
	- If the phrase is fully revealed, the App will indicate the User has won
	- If the number of guesses reaches 0 and not all letters are revealed, the app will indicate the User has lost
	- The App will start a new game when the user clicks the reset button


### Learning elements

1. HTML
	- element layout
	- section / div
	- spans
	- buttons
	- paragraphs
	- flexbox

2. CSS
	- margin and padding
	- colors
	- font styling
	- borders
	- alignment

3. Javascript
	- understanding and responding to events
	- DOM manipulation
	- strings
	- lists
	- list filtering
	- conditionals
	- fetch API

4. Software Development Skills
	- Iterative Development
	- Event driven programming
	- interacting with internet APIs


## Reference

https://jsbeginners.com/javascript-hangman-app-project/



#### Suggested Iterations

Stages in *italics* are optional challenges

1. Fetching a phrase from internet, print in body
2. show stylised phrase in layout
3. reset button
4. hide phrase and keyboard events
5. add guess count
6. add win / loss states
7. *Change guesses to not count down when correct letter guessed*
8. *Change guesses to not count down when a previously guessed letter is pressed*