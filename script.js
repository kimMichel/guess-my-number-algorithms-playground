'use strict'

let number = Math.floor(Math.random() * 100) + 1

document.querySelector('.number').textContent = number

document.querySelector('.again').addEventListener('click', () => {
  console.log('hello world')
})

document.querySelector('.check').addEventListener('click', () => {
  Promise.all([binarySearch(), linearSearch()])
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

        return resolve
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

        return resolve
      }

      i++
    }, 1000)
  })
}
