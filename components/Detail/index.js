import React,{ Component } from 'react'
import Article from '../Article'
import Comments from '../Comments'





export default class Detail extends Component {
	constructor(props) {
    super(props)
 	}

	render() {
		const { actions, article, comments, articles } = this.props
		const id = this.props.params.id
		return(
			<div>
				<Article id={id} actions={actions} article={article} articles={articles}/>
				<Comments id={id} actions={actions} comments={comments}/>
			</div>
		)
	}
}
