import React, { Component, PropTypes } from 'react'

export default class CommentItem extends Component {
	render() {
		const {avatarUrl, username, time, text} = this.props
		return(
			<div className="comment-item">
				<div className="avatar">
					<img src={avatarUrl} />
				</div>
				<div>
					<p>{username}</p>
					<p>{time}</p>
					<p>{text}</p>
				</div>
			</div>
		)		
	}
}