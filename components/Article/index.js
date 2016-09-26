import React,{ Component } from 'react'
import marked, { Renderer } from 'marked'
import { ARTICLES_API } from '../../constant'
import highlightjs from 'highlight.js'
import { timeHandle } from '../../minix'
import Loading from '../Loading'

var css = require('./style.styl')

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
    const { fetchArticle } = this.props.actions
    const id = this.props.id
    fetchArticle(`${ARTICLES_API}/${id}`)
  }
  render() {

    const { data } = this.props.article
    if(!data){
      return (<Loading />)
    }

    return(
      <div className="article-entry">
        <div className='title'>{data.title}</div>
        <div className='updated'>更新时间：{timeHandle(data.updated_at)}</div>
        <div className='login'>作者：{data.user.login}</div>
        <div dangerouslySetInnerHTML={{__html: marked(data.body || '')}} />
      </div>
    )
  }
}
