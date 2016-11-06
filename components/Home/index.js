import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import TeamInfo from '../TeamInfo'

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
