'use strict'

import React from 'react'

export const NpmInfo = React.createClass({
	propTypes: {
    	npm: React.PropTypes.object.isRequired
  	},

	render () {
		return (
			<div className="panel-module">
		  	<h2 className="mt0"><span className="logo logo-npm"></span> npm</h2>
	    	<ul className="list-unstyled cf module-info-list">
					<li><strong className="module-info-heading">Tagline:</strong> {this.props.npm.desc}</li>
					<li><strong className="module-info-heading">Version:</strong> {this.props.npm.version}</li>
        </ul>
  		</div>
		)
	}
})

export default NpmInfo
