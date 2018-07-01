const store = require('./store')

const showCarsSuccess = function (response) {
  console.log(response)
  $('#list').html('')
  for (let i = 0; i < response.cars.length; i++) {
    const displayMessage = (`<div style='clear:left; border: solid black 2px; display: inline-block; padding: 10px; margin: 5px;'><p>Car Id: ${response.cars[i].id}</p>
                             <p>Car Model: ${response.cars[i].model}</p>
                             <p>Car Make: ${response.cars[i].make}</p>
                             <p>Car Model: ${response.cars[i].year}</p>
                             <p>Car Color: ${response.cars[i].color}</p>
                             <p>Car Problem: ${response.cars[i].problem}</p>
                             <p><button id='${response.cars[i].id}'>Delete</button></div>`)
    $('#list').append(displayMessage)
  }
}

const showCarsFailure = function (response) {
  console.log(response)
  console.log('Fail')
}

const createCarSuccess = function (response) {
  console.log(response)
  console.log('Create Car Success')
}

const createCarFailure = function (response) {
  console.log('Create Car Failure')
}

const signUpSuccess = function (response) {
  $('#status-message').html('Sign Up Success')
}

const signUpFailure = function (response) {
  $('#status-message').html('Sign Up Failure')
  // $('#messageStatus').html('Sign up unsucessful, please try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#status-message').html('Sign In Success')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#show-cars').show()
  $('#create-car-form').show()
}

const signInFailure = function (response) {
  $('#status-message').html('Sign In Failure')
  // $('#messageStatus').html('Sign in error, try again!')
}

const changePasswordSuccess = function (response) {
  console.log('Change Password Success')
  console.log(response)
  // $('#messageStatus').html('Change Password successful')
  // $('#second-message').html('')
}

const changePasswordFailure = function (response) {
  console.log('Change Password Failure')
  console.log(response)
  // $('#messageStatus').html('Change Password Unsuccessful')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#status-message').html('Sign Out Success')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#show-cars').hide()
  $('#create-car-form').hide()
  // $('#sign-out').hide()
  // $('#messageStatus').html('You are now signed off')
  // $('#signUp-signIn').show()
  // $('#changePassword').hide()
  // $('#new-game').hide()
  // $('.grid-container').hide()
  // $('#game-info').hide()
  // $('#game-id').html('')
  // $('#second-message').html('')
}

const signOutFailure = function (response) {
  $('#status-message').html('Sign Out Failure')
  // $('#messageStatus').html('Log off unsuccessful')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createCarSuccess,
  createCarFailure,
  showCarsSuccess,
  showCarsFailure
}
