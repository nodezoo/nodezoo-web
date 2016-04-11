'use strict'
var React = require('react')
const GRIDSIZES = {
  'md': 'col-md-',
  'sm': 'col-sm-',
  'xs': 'col-xs-',
  'lg': 'col-lg-',
  'xsOS': 'col-xs-offset-',
  'smOS': 'col-sm-offset-',
  'mdOS': 'col-md-offset-',
  'lgOS': 'col-lg-offset-',
  'xsHide': 'col-xs-hidden',
  'smHide': 'col-sm-hidden',
  'mdHide': 'col-md-hidden',
  'lgHide': 'col-lg-hidden'
}

var Row = React.createClass({
  render: function () {
    var Tag = this.props.rowElement || 'div'
    return (
      <Tag className={this.props.className ? `${this.props.className} row` : 'row' }> {this.props.children} </Tag>
    )
  }
})

var Col = React.createClass({
  propTypes: {
    element: React.PropTypes.string,
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsHidden: React.PropTypes.bool,
    smHidden: React.PropTypes.bool,
    mdHidden: React.PropTypes.bool,
    lgHidden: React.PropTypes.bool,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number
  },
  assignClasses: function () {
    var classes = Object.keys(GRIDSIZES).reduce((classes, currentClass) => {
      if (this.props[currentClass]) {
        return `${classes} ${GRIDSIZES[currentClass]}${this.props[currentClass]} ` // add previous added classes, plus current one
      }
      else {
        return classes // didn't exist, so don't do anything
      }
    }, 'col ')
    classes = this.props.className ? `${classes} ${this.props.className}` : classes
    return classes
  },
  render () {
    var Tag = this.props.colElement || 'div'
    return (
      <Tag {...this.props} className={this.assignClasses()}>
        {this.props.children}
      </Tag>
    )
  }
})

var RowCol = React.createClass({
  propTypes: {
    rowClass: React.PropTypes.string
  },
  render: function () {
    return (
      <Row rowElement={this.props.rowElement} className={this.props.rowClass}>
        <Col {...this.props}>{this.props.children}</Col>
      </Row>
    )
  }
})


module.exports = { Row, Col, RowCol }
