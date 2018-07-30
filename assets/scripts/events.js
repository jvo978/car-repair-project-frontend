const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onUpdateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateCar(data)
    .then(ui.updateCarSuccess)
    .then(() => onShowCars)
    .catch(ui.updateCarFailure)
}

const onShowCars = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showCars(data)
    .then(ui.showCarsSuccess)
    .catch(ui.showCarsFailure)
}

const onCreateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const resetForms = function () {
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
  document.getElementById('update-car-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  $('#signInModalLabel').html('')
  $('#signUpModalLabel').html('')
  $('.message').html('')
}

module.exports = {
  resetForms,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateCar,
  onShowCars,
  onUpdateCar
}
