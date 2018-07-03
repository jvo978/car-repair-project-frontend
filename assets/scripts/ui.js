const store = require('./store')
const api = require('./api')

const createCarSuccess = function (response) {
  const displayMessage = (`<div id='car-${response.car.id}' class='div-background-color' style='max-length:150px;'><p><b>Car ID:</b> ${response.car.id}</p>
  <p><b>Car Model:</b> ${response.car.model}</p>
  <p><b>Car Make:</b> ${response.car.make}</p>
  <p><b>Car Year:</b> ${response.car.year}</p>
  <p><b>Car Color:</b> ${response.car.color}</p>
  <p><b>Car Problem:</b> ${response.car.problem}</p>
  <button class="update-car btn btn-primary" id='${response.car.id}'>Update</button>
  <button class="remove-car btn btn-danger" id='${response.car.id}'>Delete</button>
  </div>`)
  $('#list').append(displayMessage)
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  $('#status-message').html('Car successfully added')
}

const showCarsSuccess = function (response) {
  $('#list').html('')
  for (let i = 0; i < response.cars.length; i++) {
    const displayMessage = (`<div id='car-${response.cars[i].id}' class='div-background-color' style='max-length:150px;'><p><b>Car ID:</b>${response.cars[i].id}</p>
    <p><b>Car Model:</b>${response.cars[i].model}</p>
    <p><b>Car Make:</b>${response.cars[i].make}</p>
    <p><b>Car Year:</b>${response.cars[i].year}</p>
    <p><b>Car Color:</b>${response.cars[i].color}</p>
    <p><b>Car Problem:</b>${response.cars[i].problem}</p>
    <button class="update-car btn btn-primary" id='${response.cars[i].id}'>Update</button>
    <button class="remove-car btn btn-danger" id='${response.cars[i].id}'>Delete</button>
    </div>`)
    $('#list').append(displayMessage)
  }
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  $('#change-password-form').hide()
  $('#create-car-form').hide()
}

const showCarSuccess = function (response) {
  $('#status-message').html('Update your car in the form')
  $('#create-car-form').hide()
  $('#update-car-form').show()
  $('#model').val(response.car.model)
  $('#make').val(response.car.make)
  $('#year').val(response.car.year)
  $('#color').val(response.car.color)
  $('#problem').val(response.car.problem)
  $('#carID').val(response.car.id)
  $('#list').html('')
}

const updateCarSuccess = function (response) {
  $('#status-message').html('Car successfully updated')
  $('#update-car-form').hide()
  $('#create-car-form').hide()
  const updatedCar = (`<p><b>Car ID:</b>${response.car.id}</p>
    <p><b>Car Model:</b>${response.car.model}</p>
    <p><b>Car Make:</b>${response.car.make}</p>
    <p><b>Car Model:</b>${response.car.year}</p>
    <p><b>Car Color:</b>${response.car.color}</p>
    <p><b>Car Problem:</b>${response.car.problem}</p>
    <button class="update-car btn btn-primary" id='${response.car.id}'>Update</button>
    <button class="remove-car btn btn-danger" id='${response.car.id}'>Delete</button>`)
  const carUpdated = $('#car-' + response.car.id).html(updatedCar)
  $('#list').append(carUpdated)
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
}

const updateCarFailure = function (response) {
  $('#status-message').html('Unable to update car')
}

const onShowCar = function (event) {
  event.preventDefault()
  const carID = event.target.id
  api.showCar(carID)
    .then(showCarSuccess)
    .catch(showCarFailure)
}

const onDeleteCar = function (event) {
  event.preventDefault()
  const carID = event.target.id
  api.deleteCar(carID)
    .then(deleteCarSuccess(carID))
    .catch(deleteCarFailure)
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
  document.getElementById('update-car-form').reset()
}

const showCarFailure = function (response) {
  $('#status-message').html('Unable to update car')
}

const showCarsFailure = function (response) {
  $('#status-message').html('Could not show cars')
}

const createCarFailure = function (response) {
  $('#status-message').html('Car successfully added')
}

const signUpSuccess = function (response) {
  $('#status-message').html('Sign Up Success')
}

const signUpFailure = function (response) {
  $('#status-message').html('Sign Up Failure')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#status-message').html('Sign In Success')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out').show()
  $('#show-cars').show()
  $('#create-car-form').show()
  $('#change-password-link').show()
}

const signInFailure = function (response) {
  $('#status-message').html('Sign In Failure')
  // $('#messageStatus').html('Sign in error, try again!')
}

const changePasswordSuccess = function (response) {
  $('#status-message').html('Change Password Success')
  $('#change-password-form').hide()
  $('#create-car-form').show()
}

const changePasswordFailure = function (response) {
  $('#status-message').html('Sign In Failure')
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
  $('#change-password-link').hide()
  $('#list').html('')
  $('#update-car-form').hide()
  $('#add-car-link').hide()
}

const signOutFailure = function (response) {
  $('#status-message').html('Sign Out Failure')
}

const deleteCarSuccess = function (carID) {
  $('#status-message').html('Car successfully deleted')
  $('#car-' + carID).remove()
}

const deleteCarFailure = function () {
  $('#status-message').html('Could not delete car')
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
  showCarsFailure,
  updateCarSuccess,
  updateCarFailure
}
