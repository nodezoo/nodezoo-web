'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/login'
import {replacePath} from 'redux-simple-router'
import { Row, Col, RowCol } from '../components/layout'

const Login = React.createClass({
  componentWillMount () {
    const {dispatch, state} = this.props

    if (state.login.isLoggedIn) {
      dispatch(replacePath('/'))
    }
  },

  componentWillUpdate (nextProps, nextState) {
    const {dispatch, state} = this.props

    if (nextProps.state.login.isLoggedIn) {
      dispatch(replacePath(state.routing.state ? state.routing.state.path : '/', state.routing))
    }
  },

  handleLogIn (event) {
    event.preventDefault()

    const {username, password} = this.refs
    const {dispatch} = this.props

    if (username.value.length > 0 && password.value.length > 0) {
      dispatch(login(username.value, password.value))
    }
  },

  handleLoginWithGitHub (event) {
    event.preventDefault()

    // TODO
  },

  handleLoginWithGMail (event) {
    event.preventDefault()

    // TODO
  },

  render () {

    return (
      <RowCol rowClass="center-xs" xs={12} md={4} className="panel">
        {(() => {
          const {state} = this.props

          if (state.login.hasError)
            return (
              <Col sm={12} >
                <Col className="alert alert-info alert-has-icon txt-left">{state.login.errorMessage}</Col>
              </Col>
            )
        })()}
        <Col colElement="form" id="login-form" onSubmit={this.handleLogIn}>
          <Col sm={12}>
            <input ref="username" type="text" placeholder="Username" id="user-name" className="input-large" />
          </Col>
          <Col sm={12}>
            <input ref="password" type="password" placeholder="Password" id="user-password" className="input-large" />
          </Col>
          <Col sm={12}>
            <button id="login-submit" type="submit" className="btn btn-large">Log In</button>
          </Col>
        </Col>
        <Col colElement="form" id="login-with-github-form" onSubmit={this.handleLoginWithGitHub}>
          <Col sm={12}>
            <button id="login-with-github-submit" type="submit" className="btn btn-large">Login with GitHub</button>
          </Col>
        </Col>
        <Col colElement="form" id="login-with-gmail-form" onSubmit={this.handleLoginWithGMail}>
          <Col sm={12}>
            <button id="login-with-gmail-submit" type="submit" className="btn btn-large">Login with GMail</button>
          </Col>
        </Col>
      </RowCol>
    )
  }
})

function mapStatesToProps (state) {
  return {
    state: state
  }
}

export default connect(mapStatesToProps)(Login)
