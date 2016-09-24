import React, { Component, PropTypes } from 'react'

var css = require('./style.styl')

export default class CommentItem extends Component {
	render() {
		const {avatarUrl, username, time, text} = this.props
		return(
			<div className="comment-item">
				<div className="avatar">
					<img src={avatarUrl} />
				</div>
				<div className='comment-info'>
					<p className='username'>{username}</p>
					<p className='time'>{time}</p>
					<p className='text'>{text}</p>
				</div>
			</div>
		)
	}
}
