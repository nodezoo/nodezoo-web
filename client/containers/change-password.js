'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { changePassword } from '../lib/auth'
import { Row, Col, RowCol } from '../components/layout'
import { Link } from 'react-router'

const ChangePassword = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    this.setState({
      actionCompleted: false,
      errorMessage: null
    })
  },

  handleResetPassword(event) {
    event.preventDefault()

    const { submit, newPassword, passwordRepeat } = this.refs
    const { dispatch, params } = this.props

    submit.disabled = true

    changePassword(newPassword.value, passwordRepeat.value, params.token, (errorMessage) => {
      if (errorMessage) {
        submit.disabled = false

        return this.setState({
          errorMessage: errorMessage
        })
      }

      this.setState({
        actionCompleted: true
      })
    })
  },

  render () {
    return (
      <RowCol rowClass="flex-h-center" className="panel" xs={12} sm={8} md={6} lg={4}>
        {(() => {
          const { actionCompleted, errorMessage } = this.state

          if (!actionCompleted || errorMessage)
            return (
              <Col sm={12}>
                {(() => {
                  if (errorMessage)
                    return (
                      <Col>
                        <Col className="alert alert-info alert-has-icon txt-left">{errorMessage}</Col>
                      </Col>
                    )
                })()}
                <Col colElement="form" id="change-password-form" onSubmit={this.handleResetPassword}>
                  <Col>
                    <input type="password" className="input-large" placeholder="Enter your new password" ref="newPassword" id="new-password" required />
                  </Col>
                  <Col>
                    <input type="password" className="input-large" placeholder="Repeat your password" ref="passwordRepeat" id="password-repeat" required />
                  </Col>
                  <Col>
                    <button type="submit" className="btn btn-large" ref="submit" id="change-password-submit">Change your password</button>
                  </Col>
                </Col>
              </Col>
            )
          else
            return (
              <Col sm={12} className="txt-left">
                Your password has been changed.<br/>
                <br/>
                Click <Link to="/auth/login">here</Link> to return to the login page.
              </Col>
            )
        })()}
      </RowCol>
    )
  }
})

let mapStatesToProps = (state) => {
  return {
  }
}

export default connect(mapStatesToProps)(ChangePassword)
