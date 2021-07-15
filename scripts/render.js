const render = function (phrase) {
  const container = document.querySelector('.container')
  container.innerHTML = ''
  for (const letter of phrase) {
    const element = document.createElement('div')
    element.classList.add('letter-box')
    element.innerHTML = letter
    container.append(element)
  }
}