import React, { Component } from 'react'
import { ARTICLES_API } from '../../constant'
import CommentItem from '../CommentItem'
// import { timeHandle } from '../../minix'
import Loading from '../Loading'

var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class Comments extends Component {
	componentDidMount() {
		const { fetchComment } = this.props.actions
		const { id } = this.props
		fetchComment(`${ARTICLES_API}/${id}/comments`)
	}
	render() {
		const {data} = this.props.comments
		const {id} = this.props
		if(!data){
			return (<Loading />)
		}
		else if(data.length == 0){

			return (
					<div className="no-comment">
            <div className='end-line'>d</div>
            <i>文章暂时没有评论</i>
            <a className='reply' href={`https://github.com/newteo/team-blog-repo/issues/${id}`} target="_blank">回复</a>
            <span className='prompt'>将跳转到GitHub issues回复</span>
					</div>
			)
		}
		return(
			<div className='comment'>
        <div className='end-line'>d</div>
        <a  className="reply" href={`https://github.com/newteo/team-blog-repo/issues/${id}`} target="_blank">回复</a>
        <span className='prompt'>将跳转到GitHub issues回复</span>
				{
					data.map((item,index) => {
						return(
							<CommentItem key={index} avatarUrl={item.user.avatar_url}
								username={item.user.login}
								time={String(item.updated_at)}
								text={item.body}
							/>
						)
					})
				}
			</div>
		)

	}
}
