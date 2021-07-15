let puzzle
let lettersGuessed = []
let guesses = 5
let playGame = true

const resetPuzzle = async function () {
  const wordCount = Math.ceil(1 + Math.random() * 4)
  puzzle = await getPuzzle(wordCount)
  puzzle = puzzle.toLowerCase()
  const puzzleHidden = generateHiddenPuzzle()
  renderPuzzle(puzzleHidden)
  renderGuesses(guesses)
  renderGameMessage('', '#000000')
  playGame = true
}

const generateHiddenPuzzle = function () {
  let puzzleHidden = []
  for (const l of puzzle) {
    if (l === ' ') {
      puzzleHidden.push(' ')
    } else if (lettersGuessed.includes(l)) {
      puzzleHidden.push(l)
    } else {
      puzzleHidden.push('*')
    }
  }
  return puzzleHidden
}

const keyPress = function (e) {
  if (playGame) {
    const key = e.key.toLowerCase()
    // we shouldn't subtract guesses for non-letter symbols
    if (key.match(/^[a-z]+$/)) {
      if (!lettersGuessed.includes(key)) {
        lettersGuessed.push(key)
        if (!puzzle.includes(key)) {
          guesses--
        }
      }
    }
    const puzzleHidden = generateHiddenPuzzle()
    renderPuzzle(puzzleHidden)
    renderGuesses(guesses)
    if (!puzzleHidden.includes('*')) {
      renderGameMessage('YOU WIN!', '#22FF22')
      playGame = false
    } else if (guesses === 0) {
      renderGameMessage('Sorry, you lost.', '#FF2222')
      playGame = false
    }
  }
}

const clickReset = function () {
  lettersGuessed = []
  guesses = 5
  resetPuzzle()
}

window.onload = function () {
  document.querySelector('#reset').addEventListener('click', clickReset)
  document.addEventListener('keydown', keyPress)
  clickReset()
}
