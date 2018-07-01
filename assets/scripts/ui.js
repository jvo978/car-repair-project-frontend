const store = require('./store')
const api = require('./api')

const showCarsSuccess = function (response) {
  console.log(response)
  $('#list').html('')
  for (let i = 0; i < response.cars.length; i++) {
    const displayMessage = (`<div id='car-${response.cars[i].id}' style='clear:left; border: solid black 2px; display: inline-block; padding: 10px; margin: 5px;'><p>Car Id: ${response.cars[i].id}</p>
                             <p>Car Model: ${response.cars[i].model}</p>
                             <p>Car Make: ${response.cars[i].make}</p>
                             <p>Car Model: ${response.cars[i].year}</p>
                             <p>Car Color: ${response.cars[i].color}</p>
                             <p>Car Problem: ${response.cars[i].problem}</p>
                             <button class="remove-car" id='${response.cars[i].id}'>Delete</button>
                             <button id='${response.cars[i].id}'>Update</button>
                             </div>`)
    $('#list').append(displayMessage)
  }
  $('.remove-car').on('click', onDeleteCar)
}

const onDeleteCar = function (event) {
  event.preventDefault()
  const carID = event.target.id
  api.deleteCar(carID)
    .then(deleteCarSuccess(carID))
    .catch(deleteCarFailure)
}

const showCarsFailure = function (response) {
  console.log(response)
  console.log('Fail')
}

const createCarSuccess = function (response) {
  console.log(response)
  const displayMessage = (`<div id='car-${response.car.id}' style='clear:left; border: solid black 2px; display: inline-block; padding: 10px; margin: 5px;'><p>Car Id: ${response.car.id}</p>
                            <p>Car Model: ${response.car.model}</p>
                             <p>Car Make: ${response.car.make}</p>
                             <p>Car Model: ${response.car.year}</p>
                             <p>Car Color: ${response.car.color}</p>
                             <p>Car Problem: ${response.car.problem}</p>
                             <button class="remove-car" id='${response.car.id}'>Delete</button>
                             <button id='${response.car.id}'>Update</button>
                             </div>`)
  $('#list').append(displayMessage)
  $('#status-message').html('Car successfully added')
}

const createCarFailure = function (response) {
  $('#status-message').html('Car successfully added')
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

const deleteCarSuccess = function (carID) {
  $('#car-' + carID).remove()
}

const deleteCarFailure = function () {
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
