let puzzle
let puzzleHidden

const reRenderPuzzle = async function () {
  const wordCount = Math.ceil(1 + Math.random() * 4)
  puzzle = await getPuzzle(wordCount)
  puzzleHidden = puzzle
  render(puzzleHidden)
}

const clickReset = async function () {
  reRenderPuzzle()
}

window.onload = async function () {
  reRenderPuzzle()
  document.querySelector('#reset').addEventListener('click', clickReset)
}
