let puzzle
let puzzleHidden

window.onload = async function () {
  const wordCount = Math.ceil(1 + Math.random() * 4)
  puzzle = await getPuzzle(wordCount)
  puzzleHidden = puzzle
  render(puzzleHidden)
}
