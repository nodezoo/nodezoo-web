'use strict'

/*
 * TODO This is a provisional implementation
 */

export function doLogin(username, password, cb) {
  if (username == 'admin' && password == 'admin')
    return cb({isLoggedIn: true, userName: 'Admin User', hasError: false, errorMessage: null})

  cb({isLoggedIn: false, userName: null, hasError: true, errorMessage: 'Invalid credentials'})
}

export function doLogout() {
  console.log("doLogout")
}
