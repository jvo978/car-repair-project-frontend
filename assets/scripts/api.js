const store = require('./store')
const config = require('./config')

const updateCar = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/cars/' + data.car.carID,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCar = function (carID) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cars/' + carID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCar = function (carID) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/cars/' + carID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCars = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/cars',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCar = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/cars',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createCar,
  signUp,
  signIn,
  changePassword,
  signOut,
  showCars,
  deleteCar,
  showCar,
  updateCar
}
