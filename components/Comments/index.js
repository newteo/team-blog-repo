import React, { Component } from 'react'
import { ARTICLES_API } from '../../constant'
import CommentItem from '../CommentItem'

export default class Comments extends Component {
	componentDidMount() {
		const { fetchComment } = this.props.actions
		const { id } = this.props
		fetchComment(`${ARTICLES_API}/${id}/comments`)
	}
	render() {
		const {data} = this.props.comments
		if(!data){
			return (<div>loding...</div>)
		}
		console.log(data)
		return(
			<div>
			{
				data.map((item,index) => {
					return(
						<CommentItem key={index} avatarUrl={item.user.avatar_url}
							username={item.user.loging}
							time={item.updated_at}
							text={item.body}
						/>
					)
				})
			}
			</div>
		)
		
	}
} 