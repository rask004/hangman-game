const getPuzzle = async function(wordCount) {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.ok) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}
