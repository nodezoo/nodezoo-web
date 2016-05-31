'use strict'

/*
 * This is a fake implementation
 */

const LoggedUser = {
  lastLoggedIn: Date.now(),
  fullName: 'Admin User'
}

export function doLogin(username, password, cb) {
  let args = ['Invalid credentials'];

  if (username == 'admin' && password == 'admin') {
    sessionStorage.setItem('LoggedUser', JSON.stringify(LoggedUser))

    args = [null, LoggedUser]
  }

  setTimeout(() => { cb.apply(null, args) }, 1000)
}

export function resetPassword(email, cb) {
  let errorMessage = null

  if (email != 'test@test.com') {
    errorMessage = 'User not found'
  }

  setTimeout(() => { cb(errorMessage) }, 1000)
}

export function changePassword(newPassword, passwordRepeat, token, cb) {
  let errorMessage = null

  if (token != 1234) {
    errorMessage = 'Wrong token'
  }

  setTimeout(() => { cb(errorMessage) }, 1000)
}

export function updateProfile(profileInfo, cb) {
  let newProfile = Object.assign({}, LoggedUser, { fullName: profileInfo.fullName })

  sessionStorage.setItem('LoggedUser', JSON.stringify(newProfile))

  setTimeout(() => { cb(null, newProfile) }, 1000)
}

export function getUserInfo() {
  let userInfo = sessionStorage.getItem('LoggedUser')

  return userInfo ? JSON.parse(userInfo) : null
}
