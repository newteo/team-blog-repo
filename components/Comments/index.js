import React, { Component } from 'react'
import { ARTICLES_API } from '../../constant'
import CommentItem from '../CommentItem'
import { yearMonthDay } from '../../utils'
import Loading from '../Loading'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// 採用兩個空格，不用縮進
// 誰寫的，自己更正

var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`${ARTICLES_API}/${this.props.id}/comments`).then((response) => response.json()).then((responseJSON) => {
      this.setState({
        loading: false,
        comments: responseJSON
      })
    })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    if (this.state.comments.length == 0) {
      return (
        <div className="no-comment">
          <div className='end-line'>d</div>
          <i>文章暂时没有评论</i>
          <a className='reply' href={`https://github.com/newteo/team-blog-repo/issues/${this.props.id}`} target="_blank">回复</a>
          <span className='prompt'>将跳转到GitHub issues回复</span>
        </div>
      )
    }

    return (
      <div className='comment'>
      <div className='end-line'>d</div>
        <a className="reply" href={`https://github.com/newteo/team-blog-repo/issues/${this.props.id}`} target="_blank">回复</a>
        <span className='prompt'>将跳转到GitHub issues回复</span>
        {
          this.state.comments.map((item,index) => {
            return (
              <CommentItem key={index} avatarUrl={item.user.avatar_url}
                username={item.user.login}
                time={yearMonthDay(item.updated_at)}
                text={item.body} />
            )
          })
        }
      </div>
    )
  }
}
