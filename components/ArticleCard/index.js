import React, { Component, PropTypes } from 'react'
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card'
import { Link } from 'react-router'

var css = require('./style.styl')

export default class ArticleCard extends Component {

	render() {
		const { id, title, username, url, describe} = this.props 
		return(
			<div className="article-card">
				<Link style={{textDecoration: 'none'}}to={`/posts/${id}`}>
					<Card>
				    <CardTitle title={title} subtitle={username} />
				    <CardMedia>
				    	<img style={{height: 300}} src={url} />
				    </CardMedia>
				    <CardText style={{height: 80}}>{describe}</CardText>
				  </Card>
				</Link>
			</div>
		)		
	}
}

ArticleCard.PropTypes = {
  id : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired
}