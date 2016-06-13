import * as App from './start-app'

import { expect } from 'chai'
import { describe, it, before } from 'mocha'
import { renderIntoDocument, findAllInRenderedTree, isDOMComponent, Simulate } from 'react-addons-test-utils'

describe('Login', function () {
  this.timeout(0)

  it('/auth/login should redirect to / if already logged in', function () {
    App.registerMock('../lib/auth', { getUserInfo: () => { return { fullName: 'Admin' } }})
    App.start()

    App.store.dispatch(require('redux-simple-router').pushPath('/auth/login', App.store.getState().routing))
    let app = renderIntoDocument(App.root)

    expect(App.store.getState().login.userInfo).to.not.be.null
    expect(App.store.getState().routing.path).to.equal('/')
    expect(App.store.getState().routing.replace).to.equal(true)
  })

  it('user is redirected to previous page after authentication', function () {
    App.registerMock('../lib/auth', {
      getUserInfo: () => { return null },
      doLogin: (u, p, cb) => { cb(null, { fullName: 'Test'}) }
    })
    App.start()

    App.store.dispatch(require('redux-simple-router').pushPath('/profile', App.store.getState().routing))
    let app = renderIntoDocument(App.root)

    expect(App.store.getState().login.userInfo).to.be.null
    expect(App.store.getState().routing.path).to.equal('/auth/login')
    expect(App.store.getState().routing.replace).to.equal(true)

    Simulate.submit(findAllInRenderedTree(app, (c) => { return isDOMComponent(c) && c.id == 'login-form' })[0])

    expect(App.store.getState().login.userInfo).to.not.be.null
    expect(App.store.getState().routing.path).to.equal('/profile')
    expect(App.store.getState().routing.replace).to.equal(true)
  })

  it('an alert is displayed if authentication fails', function () {
    App.registerMock('../lib/auth', {
      getUserInfo: () => { return null },
      doLogin: (u, p, cb) => { cb('Error') }
    })
    App.start()

    App.store.dispatch(require('redux-simple-router').pushPath('/auth/login', App.store.getState().routing))
    let app = renderIntoDocument(App.root)

    Simulate.submit(findAllInRenderedTree(app, (c) => { return isDOMComponent(c) && c.id == 'login-form' })[0])

    expect(App.store.getState().login.userInfo).to.be.null
    expect(findAllInRenderedTree(app, (c) => { return isDOMComponent(c) && c.className.indexOf('alert') >= 0 }).length).to.equal(1)
  })

  it('link to reset password is displayed', function () {
    App.registerMock('../lib/auth', {
      getUserInfo: () => { return null }
    })
    App.start()

    App.store.dispatch(require('redux-simple-router').pushPath('/auth/login', App.store.getState().routing))
    let app = renderIntoDocument(App.root)

    expect(App.store.getState().login.userInfo).to.be.null
    expect(findAllInRenderedTree(app, (c) => { return isDOMComponent(c) && c.href == '/auth/reset' }).length).to.equal(1)
  })
})
