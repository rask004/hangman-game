const renderPuzzle = function (phrase) {
  const container = document.querySelector('.container')
  container.innerHTML = ''
  for (const letter of phrase) {
    const element = document.createElement('div')
    element.classList.add('letter-box')
    element.innerHTML = letter
    container.append(element)
  }
}

const renderGuesses = function (guessCount) {
  const guessesContainer = document.querySelector('#guess-count')
  guessesContainer.innerHTML = guessCount
}

const renderGameMessage = function (message, colorCode) {
  const messageContainer = document.querySelector('#message-container')
  messageContainer.innerHTML = message
  messageContainer.style.color = colorCode
}
