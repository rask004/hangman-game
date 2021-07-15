let puzzle
let lettersGuessed = []

const renderInitialPuzzle = async function () {
  const wordCount = Math.ceil(1 + Math.random() * 4)
  puzzle = await getPuzzle(wordCount)
  puzzle = puzzle.toLowerCase()
  const puzzleHidden = generateHiddenPuzzle()
  render(puzzleHidden)
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
  const key = e.key
  if (!lettersGuessed.includes(key) && puzzle.includes(key)) {
    lettersGuessed.push(key)
  }
  const puzzleHidden = generateHiddenPuzzle()
  render(puzzleHidden)
}

const clickReset = async function () {
  renderInitialPuzzle()
  lettersGuessed = []
}

window.onload = async function () {
  document.querySelector('#reset').addEventListener('click', clickReset)
  document.addEventListener('keydown', keyPress)
  clickReset()
}
