const store = require('./store')

const showCarsSuccess = function (response) {
  console.log(response)
  const displayMessage = (`<ul>${response.cars.id}</ul>`)
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
  console.log(response)
  console.log('Create Car Failure')
}

const signUpSuccess = function (response) {
  // $('#messageStatus').html('Wecome, you are signed up!')
  console.log('Sign Up Success')
}

const signUpFailure = function (response) {
  console.log(response)
  console.log('Sign Up Failure')
  // $('#messageStatus').html('Sign up unsucessful, please try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log('Sign In Success')
  console.log(response)
}

const signInFailure = function (response) {
  console.log('Sign In Failure')
  console.log(response)
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
  console.log('Sign Out Success')
  console.log(response)
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
  console.log('Sign Out Failure')
  console.log(response)
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
