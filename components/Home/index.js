import React, { Component } from 'react'
import Banner from '../Banner'
import ArticleList from '../ArticleList'

var css = require ('./style.styl')


export default class Home extends Component {
	render() {
		const { actions, articles } = this.props
		return (
			<div>
				<ArticleList actions={actions} articles={articles}/>
			</div>
		)
	}
}
