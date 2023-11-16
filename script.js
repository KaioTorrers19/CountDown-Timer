function calculateTimeRemaining() {
  const now = new Date()
  const launchDate = new Date('2024-01-08T00:00:00')

  const timeDifference = launchDate - now

  const days = Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0)
  const hours = Math.max(
    Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    0
  )
  const minutes = Math.max(
    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    0
  )
  const seconds = Math.max(Math.floor((timeDifference % (1000 * 60)) / 1000), 0)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

function updateCountdown() {
  const { days, hours, minutes, seconds } = calculateTimeRemaining()

  document.getElementById('dias').innerText = days
  document.getElementById('horas').innerText = hours < 10 ? '0' + hours : hours
  document.getElementById('minutos').innerText =
    minutes < 10 ? '0' + minutes : minutes
  document.getElementById('segundos').innerText =
    seconds < 10 ? '0' + seconds : seconds
}

function startCountdown() {
  updateCountdown()

  setInterval(function () {
    updateCountdown()
  }, 1000)
}

window.onload = startCountdown

let modal = document.getElementById('modal')
function DisplayNone() {
  modal.classList.add('hidden')
}

function DisplayBlock() {
  modal.classList.remove('hidden')
}
