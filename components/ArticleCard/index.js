import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import MarkdownParse from '../MarkdownParse'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// 採用兩個空格，不用縮進
// 誰寫的，自己更正
var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class ArticleCard extends Component {

	render() {

    const { id, title, username, time, url, describe} = this.props
    return(
      <div className="article-card">
        <Link style={{textDecoration: 'none'}} to={`/posts/${id}`} target='_blank'>
            <div className="card-info">
              <div className='title'>{title}</div>
              <div className='sub-title'>
                <p>{username}</p>
                <p>•  {time}</p>
              </div>
            </div>
            <div className='card-img'>
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
