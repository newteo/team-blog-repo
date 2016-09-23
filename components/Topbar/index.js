import React,{ Component } from 'react'
import { Link } from 'react-router'
var css = require('./style.styl')

export default class Topbar extends Component {
	render() {
		return (
			<div className="Topbar">
				<Link to="/home">					
					<img id="logo" src="/images/logo.png" />
				</Link>
			</div>
		)
	}
}