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
  $('#createCarModal').modal('hide')
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  $('#status-message').html('Car successfully added')
}

const showCarsSuccess = function (response) {
  $('#list').html('')
  if (response.cars.length === 0) {
    $('#status-message').html('You have no cars in your inventory')
  }
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
    $('#status-message').html('Your car inventory: ')
  }
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  // $('#change-password-form').hide()
  // $('#create-car-form').hide()
}

const showCarSuccess = function (response) {
  $('#updateCarModal').modal('show')
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
  $('#updateCarModal').modal('hide')
  // $('#create-car-form').hide()
  const updatedCar = (`<p><b>Car ID:</b>${response.car.id}</p>
    <p><b>Car Model:</b>${response.car.model}</p>
    <p><b>Car Make:</b>${response.car.make}</p>
    <p><b>Car Model:</b>${response.car.year}</p>
    <p><b>Car Color:</b>${response.car.color}</p>
    <p><b>Car Problem:</b>${response.car.problem}</p>
    <button class="update-car btn btn-primary" id='${response.car.id}'>Update</button>
    <button class="remove-car btn btn-danger" id='${response.car.id}'>Delete</button>`)
  const carUpdated = $('#car-' + response.car.id).append(updatedCar)
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  $('#list').html(carUpdated)
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
  $('#signUpModal').modal('hide')
  $('#status-message').html('Sign Up Success')
}

const signUpFailure = function (response) {
  $('#signUpModalLabel').html('Sign Up Failure, Try Again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#signInModal').modal('hide')
  $('#status-message').html('Sign In Successful')
  $('.display-none').show()
  $('.display').hide()
}

const signInFailure = function (response) {
  $('#signInModalLabel').html('Sign In Failure, Try again!')
}

const changePasswordSuccess = function (response) {
  $('#status-message').html('Change Password Success')
  $('#changePasswordModal').modal('hide')
}

const changePasswordFailure = function (response) {
  $('#changePasswordModalLabel').html('Change Password Failure, Try again!')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#status-message').html('Sign Out Success')
  $('.display-none').hide()
  $('.display').show()
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
