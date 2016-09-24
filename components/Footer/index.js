import React, { Component } from 'react'
import {
	CONTACT_US,
  GITHUB,
  COMPANY,
  EMAIL,
  COPYRIGHT,
} from '../../settings'

var css = require('./style.styl')

export default class Footer extends Component {
	render() {
		return(
			<div className="footer">
				<div className='contact'>{CONTACT_US}</div>
        <div className='contact-info'>
          <div className='github'><span className='iconfont icon-github'></span>{GITHUB}</div>
          <div className='company'><span className='iconfont icon-dingyuehao'></span>{COMPANY}</div>
          <div className='email'><span className='iconfont icon-email'></span>{EMAIL}</div>
        </div>
				<div className='copyright'>{COPYRIGHT}</div>
			</div>
		)
	}
}
