import React, { Component } from 'react'
import {
	CONTACT_EMAIL,
  WECHAT,
  COMPANY,
  EMAIL,
  COPYRIGHT,
} from '../../settings'

var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class Footer extends Component {
    constructor(props) {
    super(props)
    this.state = {
      backgroundDisplay: 'none'
    }
  }

  backgroundDisplay(){
    this.setState({backgroundDisplay:'block'})
  }

  backgroundNone(){
    this.setState({backgroundDisplay:'none'})
  }

	render() {
		return(
			<div className="footer">
        <div className='contact-info'>
          <div className='company'>
            <a href='http://www.newteo.com'>{COMPANY}</a>
          </div>
          <div className='wechat' onTouchStart={this.backgroundDisplay.bind(this)}>
            {WECHAT}
          </div>
          <img className='wechat-img' src='../../images/wechat.jpg'/>
          <div className='opacity-background' style={{display: this.state.backgroundDisplay}} >
            <div className='opacity' onTouchStart={this.backgroundNone.bind(this)}></div>
            <img className='wechat-img' src='../../images/wechat.jpg'/>
          </div>
          <div className='email'>
            {CONTACT_EMAIL}
          </div>
          <p className='email-number'>info@newteo.com</p>
        </div>
				<div className='copyright'>{COPYRIGHT}</div>
			</div>
		)
	}
}
