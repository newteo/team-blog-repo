import React,{ Component } from 'react'
import Article from '../Article'
import Comments from '../Comments'
import SideList from '../SideList'

export default class Detail extends Component {
	constructor(props) {
    super(props)
 	}

	render() {
		const { actions, article, comments, articles, pathname } = this.props
		const id = this.props.params.id
		return(
			<div>
				<Article id={id} actions={actions} article={article} pathname={pathname}/>
				<SideList actions = {actions} articles={articles} />
				<Comments id={id} actions={actions} comments={comments}/>
			</div>
		)
	}
}
