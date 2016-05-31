'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { updateProfile } from '../lib/auth'
import { updateLoginState } from '../actions/login'
import { replacePath } from 'redux-simple-router'
import { Row, Col, RowCol } from '../components/layout'
import { Link } from 'react-router'

const Profile = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    routing: React.PropTypes.object.isRequired,
    login: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    this.setState({
      errorMessage: null
    })
  },

  disableActions() {
    const { submit, cancel } = this.refs

    submit.disabled = true
    cancel.disabled = true
  },

  enableActions() {
    const { submit, cancel } = this.refs

    submit.disabled = false
    cancel.disabled = false
  },

  handleSubmit(event) {
    event.preventDefault()

    const { name, currentPassword, newPassword, confirmPassword } = this.refs
    const { dispatch, routing } = this.props

    this.disableActions()

    updateProfile({
      fullName: name.value,
      currentPassword: currentPassword.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    }, (errorMessage, userInfo) => {
      if (errorMessage) {
        this.enableActions()

        return this.setState({
          errorMessage: errorMessage
        })
      }

      dispatch(updateLoginState(userInfo))
      dispatch(replacePath(routing.state ? routing.state.path : '/', routing))
    })
  },

  redirectToPreviousPage(event) {
    const { dispatch, routing } = this.props

    dispatch(replacePath(routing.state ? routing.state.path : '/', routing))
  },

  render () {
    return (
      <RowCol rowClass="flex-h-center" className="flex-h-start" xs={12} sm={8} md={6} lg={4} colElement="form" onSubmit={this.handleSubmit}>
        {(() => {
          const { errorMessage } = this.state

          if (errorMessage)
            return (
              <RowCol xs={12}>
                <Col className="alert alert-info alert-has-icon txt-left">{errorMessage}</Col>
              </RowCol>
            )
        })()}

        <RowCol rowClass="mb" xs={12}>
          <h2>User Details</h2>

          <RowCol rowClass="mthalf" xs={12}>
            <label htmlFor="name">Name</label>
            <input type="text" className="input-large" placeholder="Name" ref="name" id="name" defaultValue={this.props.login.userInfo.fullName} required />
          </RowCol>
        </RowCol>

        <RowCol rowClass="mb" xs={12}>
          <h2>Login Details</h2>

          <RowCol rowClass="mthalf" xs={12}>
            <label htmlFor="current-password">Current password</label>
            <input type="password" className="input-large" placeholder="Current password" ref="currentPassword" id="current-password" />
          </RowCol>

          <RowCol rowClass="mthalf" xs={12}>
            <label htmlFor="current-password">New password</label>
            <input type="password" className="input-large" placeholder="New password" ref="newPassword" id="new-password" />
          </RowCol>

          <RowCol rowClass="mthalf" xs={12}>
            <label htmlFor="current-password">Confirm password</label>
            <input type="password" className="input-large" placeholder="Confirm password" ref="confirmPassword" id="confirm-password" />
          </RowCol>
        </RowCol>

        <Row className="mb">
          <Col xs={12} sm={6}>
            <button type="submit" className="btn btn-large" ref="submit" id="profile-submit">Save</button>
          </Col>
          <Col xs={12} sm={6}>
            <button type="button" className="btn btn-large" ref="cancel" id="profile-cancel" onClick={this.redirectToPreviousPage}>Cancel</button>
          </Col>
        </Row>
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

export default connect(mapStatesToProps)(Profile)
