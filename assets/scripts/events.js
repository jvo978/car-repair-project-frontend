const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onUpdateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateCar(data)
    .then(ui.updateCarSuccess)
    .catch(ui.updateCarFailure)
  document.getElementById('create-car-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('update-car-form').reset()
}

const onShowCars = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.showCars(data)
    .then(ui.showCarsSuccess)
    .catch(ui.showCarsFailure)
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
}

const onCreateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
  document.getElementById('create-car-form').reset()
  document.getElementById('change-password-form').reset()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)

  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
  document.getElementById('update-car-form').reset()
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  document.getElementById('update-car-form').reset()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateCar,
  onShowCars,
  onUpdateCar
}
