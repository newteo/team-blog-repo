import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import TeamInfo from '../TeamInfo'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// 採用兩個空格，不用縮進
// 誰寫的，自己更正

var css = require ('./style.styl')

export default class Home extends Component {
	render() {
		const { actions, articles } = this.props
		return (
			<div>
				<ArticleList actions={actions} articles={articles}/>
				<TeamInfo />
			</div>
		)
	}
}
