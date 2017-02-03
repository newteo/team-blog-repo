import React, { Component, PropTypes } from 'react'
import MarkdownParse from '../MarkdownParse'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// 採用兩個空格，不用縮進
// 誰寫的，自己更正
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
