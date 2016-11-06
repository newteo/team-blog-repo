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
    window.scrollTo(0,0)
    const {fetchArticleList } = this.props.actions
    const id = this.props.id
    fetchArticleList(ARTICLES_API)
  }

  render() {
    const { data } = this.props.articles
    if(!data){
      return (<Loading />)
    }
    return(
      <div className='articles-list'>
       {
          data.map((item, index) => {
            return (
              <Link className='article-titles' key={index} onClick = {() => window.location.reload()}
                to={`/posts/${item.number}`}>
                      {item.title}
              }
              }
              </Link>

            )
            })
        }
      </div>
    )
  }
}

