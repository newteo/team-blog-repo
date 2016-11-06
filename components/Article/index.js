import React, { Component, PropTypes } from 'react'
import marked, { Renderer } from 'marked'
import { ARTICLES_API } from '../../constant'
import highlightjs from 'highlight.js'
import { timeHandle } from '../../minix'
import { Link } from 'react-router'
import Loading from '../Loading'

var css = require('./style.styl')
var css = require('./mobile-style.styl')

export default class Article extends Component {
  constructor(props) {
    super(props)
    const renderer = new Renderer()

    renderer.code = (code, language) => {
      // Check whether the given language is valid for highlight.js.
      const validLang = !!(language && highlightjs.getLanguage(language));
      // Highlight only if the language is valid.
      const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
      // Render the highlighted code with `hljs` class.
      const javascript = 'javascript'
      return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
    }
    renderer.img = () => {
      return `<img className="cover" />`
    }
    marked.setOptions({
      highlight: function (code, javascript) {
        return require('highlight.js').highlightAuto(code).value
      },
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })

  }

  componentDidMount() {
    window.scrollTo(0,0)
    const { fetchArticle, fetchArticleList } = this.props.actions
    const id = this.props.id
    fetchArticle(`${ARTICLES_API}/${id}`)
    fetchArticleList(ARTICLES_API)
  }

  render() {
    const { id } = this.props
    const datas = this.props.articles.data
    const { data } = this.props.article
    if(!data){
      return (<Loading />)
    }

    return(
      <div className='article'>
        <div className="article-entry">
          <div className='title'>{data.title}</div>
          <div className='article-info'>
            <a className='login'
               href={'https://github.com/' + data.user.login}>{data.user.login}</a>
            <span className='updated'>{timeHandle(data.updated_at)}</span>
          </div>
          <div dangerouslySetInnerHTML={{__html: marked(data.body || '')}} />
        </div>
        <div className='articles-list'>
          <h3>文章列表</h3>
           {
              datas.map((item, index) => {
                return (
                    <Link className='article-titles' key={index} to={`/posts/${id}`}
                      >
                    {item.title}</Link>
                   )
              })
            }
        </div>
      </div>
    )
  }
}
