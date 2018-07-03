'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#create-car-form').on('submit', events.onCreateCar)
  $('#show-cars').on('click', events.onShowCars)
  $('#show-cars').on('click', function () {
    $('#status-message').html('Your car list:')
  })
  $('#update-car-form').on('submit', events.onUpdateCar)
  $('#sign-up-link').on('click', function () {
    document.getElementById('change-password-form').reset()
    document.getElementById('create-car-form').reset()
    document.getElementById('update-car-form').reset()
    $('#sign-up-form').show()
  })
  $('#change-password-link').on('click', function () {
    $('#list').html('')
    $('#change-password-form').show()
    $('#create-car-form').hide()
    $('#status-message').html('Change your password')
    document.getElementById('change-password-form').reset()
    document.getElementById('create-car-form').reset()
    document.getElementById('update-car-form').reset()
  })
}
)
