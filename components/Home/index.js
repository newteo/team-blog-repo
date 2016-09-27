import React, { Component } from 'react'
import Banner from '../Banner'
import ArticleList from '../ArticleList'

export default class Home extends Component {
	render() {
		const { actions, articles } = this.props
		return (
			<div>
				<Banner />
				<ArticleList actions={actions} articles={articles}/>
			</div>
		)
	}
}