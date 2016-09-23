import React, { Component } from 'react'
import {  
	CONTACT_US,
  GITHUB,
  COMPANY,
  EMAIL,
  COPYRIGHT,
} from '../../settings'

export default class Footer extends Component {
	render() {
		return(
			<div className="footer">
				<div>{CONTACT_US}</div>
				<div>{GITHUB}</div>
				<div>{COMPANY}</div>
				<div>{EMAIL}</div>
				<div>{COPYRIGHT}</div>
			</div>
		)
	}
}