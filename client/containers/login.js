'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../lib/auth'
import { updateLoginState } from '../actions/login'
import { replacePath } from 'redux-simple-router'
import { Row, Col, RowCol } from '../components/layout'
import { Link } from 'react-router'

const Login = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    routing: React.PropTypes.object.isRequired,
    login: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    this.setState({
      errorMessage: null
    })

    const { dispatch, routing, login } = this.props

    if (login.userInfo)
      dispatch(replacePath('/', routing))
  },

  disableSubmit() {
    const { submit, github, gmail } = this.refs

    submit.disabled = true
    github.disabled = true
    gmail.disabled  = true
  },

  enableSubmit() {
    const { submit, github, gmail } = this.refs

    submit.disabled = false
    github.disabled = false
    gmail.disabled  = false
  },

  handleLogIn(event) {
    event.preventDefault()

    const { username, password } = this.refs
    const { dispatch, routing } = this.props

    this.disableSubmit()

    doLogin(username.value, password.value, (errorMessage, userInfo) => {
      if (errorMessage) {
        this.enableSubmit()

        return this.setState({
          errorMessage: errorMessage
        })
      }

      dispatch(updateLoginState(userInfo))
      dispatch(replacePath(routing.state ? routing.state.path : '/', routing))
    })
  },

  handleLoginWithGitHub(event) {
    event.preventDefault()

    // TODO
  },

  handleLoginWithGMail(event) {
    event.preventDefault()

    // TODO
  },

  render () {
    return (
      <RowCol rowClass="flex-h-center" className="panel" xs={12} sm={8} md={6} lg={4}>
        {(() => {
          const { errorMessage } = this.state

          if (errorMessage)
            return (
              <Col sm={12} >
                <Col className="alert alert-info alert-has-icon txt-left">{errorMessage}</Col>
              </Col>
            )
        })()}

        <Col sm={12}>
          <Col colElement="form" id="login-form" onSubmit={this.handleLogIn}>
            <Col>
              <input type="text" className="input-large" placeholder="Username" ref="username" id="username" required />
            </Col>
            <Col>
              <input type="password" className="input-large" placeholder="Password" ref="password" id="password" required />
            </Col>
            <Col className="txt-right">
              <Link to="/auth/reset">
                <div className="mthalf mbhalf">Cannot log in?</div>
              </Link>
            </Col>
            <Col>
              <button type="submit" className="btn btn-large" ref="submit" id="login-submit">Log In</button>
            </Col>
          </Col>

          <Col colElement="form" id="login-with-github-form" onSubmit={this.handleLoginWithGitHub}>
            <Col>
              <button type="submit" className="btn btn-large" ref="github" id="login-with-github-submit">Login with GitHub</button>
            </Col>
          </Col>

          <Col colElement="form" id="login-with-gmail-form" onSubmit={this.handleLoginWithGMail}>
            <Col>
              <button type="submit" className="btn btn-large" ref="gmail" id="login-with-gmail-submit">Login with GMail</button>
            </Col>
          </Col>
        </Col>
      </RowCol>
    )
  }
})

let mapStatesToProps = (state) => {
  return {
    routing: state.routing,
    login: state.login
  }
}

export default connect(mapStatesToProps)(Login)
