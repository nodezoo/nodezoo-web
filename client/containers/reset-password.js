'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { resetPassword } from '../lib/auth'
import { Row, Col, RowCol } from '../components/layout'
import { Link } from 'react-router'

const ResetPassword = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.setState({
      actionCompleted: false,
      errorMessage: null
    })
  },

  handleResetPassword(event) {
    event.preventDefault()

    const { submit, email } = this.refs
    const { dispatch } = this.props

    submit.disabled = true

    resetPassword(email.value, (errorMessage) => {
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
                  if (this.state.errorMessage)
                    return (
                      <Col>
                        <Col className="alert alert-info alert-has-icon txt-left">{errorMessage}</Col>
                      </Col>
                    )
                })()}
                <Col colElement="form" id="reset-password-form" onSubmit={this.handleResetPassword}>
                  <Col>
                    <input type="email" className="input-large" placeholder="Enter your email address here" ref="email" id="email" required />
                  </Col>
                  <Col>
                    <button type="submit" className="btn btn-large" ref="submit" id="reset-password-submit" >Reset your password</button>
                  </Col>
                </Col>
              </Col>
            )
          else
            return (
              <Col sm={12} className="txt-left">
                You should receive an email shortly. Please follow the instructions in order to reset your password.<br/>
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

export default connect(mapStatesToProps)(ResetPassword)
