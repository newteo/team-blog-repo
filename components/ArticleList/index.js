import React,{ Component } from 'react'
import { ARTICLES_API } from '../../constant'
import ArticleCard from '../ArticleCard'
import { timeHandle } from '../../minix'
import Loading from '../Loading'
import { ARTICLES } from '../../settings'


var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class ArticleList extends Component {

	constructor(props) {
    super(props)
    this.scroll = this.scroll.bind(this)
    this.getList = this.getList.bind(this)
    this.itemsChanged = false
    this.state = {
      display: 'none'
    }
  }

  scroll(){
    const scrollTop = document.body.scrollTop
    const listHeight = document.getElementById('iscroll').scrollHeight
    const { end } = this.props.articles
    if(scrollTop>400 && listHeight-scrollTop<500 && !end){
      const { loading } = this.props.articles
      if(!loading){
          this.getList()
      }
    }
    if(document.body.scrollTop > 600){
      this.setState({display: 'block'})
    }else{
      this.setState({display: 'none'})
    }
  }

	componentDidMount() {
    window.scrollTo(0,0)
    this.getList()
    window.addEventListener('scroll', this.scroll)
	}

  getList(){
    const { fetchArticleList } = this.props.actions
    const { page } = this.props.articles
    fetchArticleList(`${ARTICLES_API}?page=${page}&per_page=10`)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }

	_transMarkdown(markdownString) {
		// !img[](https://...)
		// 提取body(文章内容)中的第一张图片的url路径作为封面图片，返回url
		// 提取第一张图片的markdown格式的内容，这样可以用于获得 内容的前段部分作为描述

		const pattern = /\!\[[^/]*\]\([^)]{4,}\)/
		var matchArray
		if((matchArray = pattern.exec(markdownString)) != null){
			let index = matchArray[0].indexOf('(')
			let url = matchArray[0].slice(index+1,-1)
			let markdown = matchArray[0]
			return {
				url,
				markdown
			}
		}
	}
	_getDescribe(markdownString) {
		//获取描述信息

		let obj = this._transMarkdown(markdownString)
		const firstImg = (obj && obj.markdown) ? obj.markdown : 'xx'
		return markdownString.replace(firstImg,'').slice(0,60)+'...'

	}

  backTop(){
    window.scrollTo(0,0)
  }

	render() {
		const { data, loading } = this.props.articles
		if(data==0){
			return <div id='iscroll'><Loading /></div>
		}
		return(
			<div className="article-content" id='iscroll'>
				<div className="article-list-header">
					<p>{ARTICLES.zh}</p>
				</div>
				<div className="article-list">
				{
					data.map((item, index) => {
						let obj = this._transMarkdown(item.body)
						return (
								<ArticleCard key={index}
									id={item.number}
									title={item.title}
                  time={timeHandle(item.updated_at)}
									username={item.user.login}
									url={(obj && obj.url) ? obj.url : '/images/nature-600-337.jpg'}
									describe={this._getDescribe(item.body)}
									/>
						)
					})
				}
        {loading ? <div className='article-list-loading'><img src='/images/Loading.gif' /></div> : null}
        <div className='top iconfont icon-top'
             onClick={this.backTop}
             style={{display: this.state.display}}>
        </div>
				</div>
			</div>
		)
	}
}
