const store = require('./store')
const api = require('./api')

const updateCarSuccess = function (response) {
  $('#status-message').html('Car updated successfully')
  $('#create-car-form').show()
  $('#update-car-form').hide()
  $('#create-car-form').show()
  $('#update-car-form').hide()

  const updatedCar = (`<p><b>Car ID:</b> ${response.car.id}</p>
    <p><b>Car Model:</b> ${response.car.model}</p>
    <p><b>Car Make:</b> ${response.car.make}</p>
    <p><b>Car Year:</b> ${response.car.year}</p>
    <p><b>Car Color:</b> ${response.car.color}</p>
    <p><b>Car Problem:</b> ${response.car.problem}</p>
    <button class="remove-car btn btn-primary" id='${response.car.id}'>Delete</button>
    <button class="update-car btn btn-primary" id='${response.car.id}'>Edit</button>`)
  $('#car-' + response.car.id).html(updatedCar)
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
}

const updateCarFailure = function (response) {
  $('#status-message').html('Car update failure')
}

const showCarsSuccess = function (response) {
  $('#list').html('')
  $('#status-message').html('Your inventory shown below')
  for (let i = 0; i < response.cars.length; i++) {
    const displayMessage = (`<div id='car-${response.cars[i].id}' style='clear:left; background-color: $black; border: solid black 2px; display: inline-block; padding: 10px; margin: 5px;'><p><b>Car ID:</b> ${response.cars[i].id}</p>
                             <p><b>Car Model:</b> ${response.cars[i].model}</p>
                             <p><b>Car Make:</b> ${response.cars[i].make}</p>
                             <p><b>Car Year:</b> ${response.cars[i].year}</p>
                             <p><b>Car Color:</b> ${response.cars[i].color}</p>
                             <p><b>Car Problem:</b> ${response.cars[i].problem}</p>
                             <button class="remove-car btn btn-primary" id='${response.cars[i].id}'>Delete</button>
                             <button class="update-car btn btn-primary" id='${response.cars[i].id}'>Edit</button>
                             </div>`)
    $('#list').append(displayMessage)
  }
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
}

const onShowCar = function (event) {
  event.preventDefault()
  const carID = event.target.id
  api.showCar(carID)
    .then(showCarSuccess)
    .catch(showCarFailure)
  document.getElementById('change-password-form').reset()
  document.getElementById('create-car-form').reset()
  document.getElementById('update-car-form').reset()
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

const showCarSuccess = function (response) {
  $('#list').html('')
  $('#status-message').html('Edit your car in the form')
  $('#create-car-form').hide()
  $('#update-car-form').show()
  $('#model').val(response.car.model)
  $('#make').val(response.car.make)
  $('#year').val(response.car.year)
  $('#color').val(response.car.color)
  $('#problem').val(response.car.problem)
  $('#carID').val(response.car.id)
}

const showCarFailure = function (response) {
}

const showCarsFailure = function (response) {

}

const createCarSuccess = function (response) {
  const displayMessage = (`<div id='car-${response.car.id}' style='clear:left; border: solid black 2px; display: inline-block; padding: 10px; margin: 5px;'><p><b>Car ID:</b> ${response.car.id}</p>
                            <p><b>Car Model:</b> ${response.car.model}</p>
                             <p><b>Car Make:</b> ${response.car.make}</p>
                             <p><b>Car Year:</b> ${response.car.year}</p>
                             <p><b>Car Color:</b> ${response.car.color}</p>
                             <p><b>Car Problem:</b> ${response.car.problem}</p>
                             <button class="remove-car btn btn-primary" id='${response.car.id}'>Delete</button>
                             <button class="update-car btn btn-primary" id='${response.car.id}'>Edit</button>
                             </div>`)
  $('#list').append(displayMessage)
  $('.remove-car').on('click', onDeleteCar)
  $('.update-car').on('click', onShowCar)
  $('#status-message').html('Car successfully added')
}

const createCarFailure = function (response) {
  $('#status-message').html('Unable to add car')
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
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#show-cars').show()
  $('#create-car-form').show()
  $('#sign-up-form').hide()
  $('#show-cars').show()
}

const signInFailure = function (response) {
  $('#status-message').html('Sign In Failure')
}

const changePasswordSuccess = function (response) {
  $('#status-message').html('Change Password Successful')
}

const changePasswordFailure = function (response) {
  $('#status-message').html('Change Password Failure')
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
  $('#list').html('')
  $('#update-car-form').hide()
}

const signOutFailure = function (response) {
  $('#status-message').html('Sign Out Failure')
}

const deleteCarSuccess = function (carID) {
  $('#status-message').html('Car Deleted')
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
