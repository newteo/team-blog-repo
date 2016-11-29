import React,{ Component } from 'react'
import { ARTICLES_API } from '../../constant'
import Loading from '../Loading'
import { Link } from 'react-router'
import './index.styl'



export default class Detail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { data, page } = this.props.articles
    if(data.length===0){
      const {fetchArticleList } = this.props.actions
      fetchArticleList(`${ARTICLES_API}?page=${page}&per_page=20`)
    }
  }

  render() {
    const { data } = this.props.articles
    if(!data){
      return (<Loading />)
    }
    return(
      <div className='articles-list'>
        <h3>文章列表</h3>
        <div className='titles'>
          <div className='has-scrollbar'>
         {
            data.map((item, index) => {
              return (
                <Link className='article-titles' key={index} onClick = {() => window.location.reload()}
                  to={`/posts/${item.number}`}>
                        {item.title}
                </Link>
              )
              })
          }
          </div>
        </div>
      </div>
    )
  }
}

