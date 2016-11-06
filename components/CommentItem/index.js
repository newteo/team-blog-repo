import React, { Component, PropTypes } from 'react'
import MarkdownParse from '../MarkdownParse'

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
					<span className='username'>{username}</span>
					<span className='time'>{time}</span>
					<MarkdownParse id="text" className='text' body={text} />
				</div>
			</div>
		)
	}
}
