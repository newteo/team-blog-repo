import React,{ Component } from 'react'
import { ARTICLES_API } from '../../constant'
import ArticleCard from '../ArticleCard'
import { timeHandle } from '../../minix'
import Loading from '../Loading'
import { ARTICLES } from '../../settings'
import TeamInfo from '../TeamInfo'

var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class ArticleList extends Component {

	constructor(props) {
    super(props)
    this.scroll = this.scroll.bind(this)
    this.state = {
      display: 'none'
    }
  }

  scroll(){
    if(document.body.scrollTop > 600){
      this.setState({display: 'block'})
    }else{
      this.setState({display: 'none'})
    }
  }

	componentDidMount() {
    window.scrollTo(0,0)
		const { fetchArticleList } = this.props.actions
		fetchArticleList(ARTICLES_API)
    window.addEventListener('scroll', this.scroll)
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
		return markdownString.replace(firstImg,'').slice(0,80)+'...'

	}

  backTop(){
    window.scrollTo(0,0)
  }

	render() {
		const { data } = this.props.articles
		if(!data){
			return <Loading />
		}
		return(
			<div className="article-content">
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
        <TeamInfo />
        <div className='top iconfont icon-top'
             onClick={this.backTop}
             style={{display: this.state.display}}></div>
				</div>
			</div>
		)
	}
}
