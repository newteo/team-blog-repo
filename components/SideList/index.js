// 格式 import React, { Component } from 'react'
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { ARTICLES_API } from '../../constant'
import Loading from '../Loading'
import { Link } from 'react-router'
import './index.styl'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    // 組件獲取 API https://api.github.com/repos/newteo/team-blog-repo/issues 的數據
    // 組件的狀態不受其它組件的 Action 影響，適合設置爲自己的狀態，簡單就好

    // 條件語句的格式
    // if (1 == 0) {
    // }

    // Fetch API Browser Support %{Chrome, Firefox, Safari 6.1+, Internet Explorer 10+}
    fetch(`${ARTICLES_API}?per_page=20`).then((response) => response.json()).then((responseJSON) => {
      this.setState({
        articles: responseJSON
      })
    })
  }

  render() {
    if (this.state.articles.length == 0) {
      return <Loading />
    }

    return <div className='articles-list'>
      <h3>文章列表</h3>
      <div className='titles'>
        <div className='has-scrollbar'>
        {
          this.state.articles.map((item, index) => {
            return <Link className='article-titles' key={index} to={`/posts/${item.number}`}>
              {item.title}
            </Link>
          })
        }
        </div>
      </div>
    </div>
  }
}
