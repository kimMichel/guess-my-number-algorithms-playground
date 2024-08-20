'use strict'

let number = generate()

document.querySelector('.number').textContent = number

document.querySelector('.again').addEventListener('click', () => {
  number = generate()

  document.querySelector('.number').textContent = number

  document.querySelector('.binary-box').style.backgroundColor = '#222'
  document.querySelector('.linear-box').style.backgroundColor = '#222'

  document.querySelector('.binary-timer').textContent = ''
  document.querySelector('.linear-timer').textContent = ''

  document.querySelector('.binary').textContent = '?'
  document.querySelector('.linear').textContent = '?'

  document.querySelector('.check').textContent = 'Check!'
})

document.querySelector('.check').addEventListener('click', () => {
  document.querySelector('.check').disabled = true
  document.querySelector('.again').disabled = true

  Promise.all([binarySearch(), linearSearch()])
    .then(() => {
      document.querySelector('.check').textContent = 'Done!'

      document.querySelector('.modal').classList.remove('hidden')
      document.querySelector('.overlay').classList.remove('hidden')
    })
    .finally(() => {
      document.querySelector('.check').disabled = false
      document.querySelector('.again').disabled = false
    })
})

document.querySelector('.close-modal').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden')
  document.querySelector('.overlay').classList.add('hidden')
})

const binarySearch = () => {
  return new Promise((resolve) => {
    let low = 1
    let high = 100
    let mid

    let tryed = 1

    const interval = setInterval(() => {
      mid = Math.floor((low + high) / 2)
      document.querySelector('.binary').textContent = mid

      if (mid === number) {
        clearInterval(interval)

        document.querySelector('.binary-box').style.backgroundColor = '#60b347'
        document.querySelector(
          '.binary-timer'
        ).textContent = `Attempt: ${tryed}`

        resolve()
      }

      if (mid < number) {
        low = mid + 1
      }

      if (mid > number) {
        high = mid - 1
      }

      tryed++
    }, 1000)
  })
}

const linearSearch = () => {
  return new Promise((resolve) => {
    let i = 1

    const interval = setInterval(() => {
      document.querySelector('.linear').textContent = i

      if (i === number) {
        clearInterval(interval)
        document.querySelector('.linear-box').style.backgroundColor = '#60b347'
        document.querySelector('.linear-timer').textContent = `Attempt: ${i}`

        resolve()
      }

      i++
    }, 1000)
  })
}

function generate() {
  return Math.floor(Math.random() * 100) + 1
}
