import React, { Component, PropTypes } from 'react'
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card'
import { Link } from 'react-router'

var css = require('./style.styl')

export default class ArticleCard extends Component {

	render() {
		const { id, title, time, username, url, describe} = this.props 
		return(
			<div className="article-card">
				<Link style={{textDecoration: 'none'}}to={`/posts/${id}`}>					
					<div className="card-info">
						<p>{title}</p>
						<p>{time}</p>
						<p>{username}</p>
					</div>
					<div className="card-img">
						<img src={url}/>
						<p>{describe}</p>
					</div>
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