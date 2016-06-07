require('./utils/test-dom')()

import React from 'react'
import ReactDOM from 'react-dom'
import {expect} from 'chai'
import {describe, it, before} from 'mocha'

import TravisBadge from '../client/components/travis-badge'

describe('Page', function () {
  var element
  var TestUtils
  before(function () {
    TestUtils = require('react-addons-test-utils')
    element = TestUtils.renderIntoDocument(<TravisBadge buildState='' />)
  })

  it('should render', function () {
    expect(TestUtils.isDOMComponent(ReactDOM.findDOMNode(element))).to.equal(true)
  })
})
