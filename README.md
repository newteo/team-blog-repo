# team-blog-repo

This is a very blog system for display of newteo

## 项目结构

Topbar和Footer是所有页面都有的组件，children包含两个组件：Home 和 Detail

```
 - App
	- Topbar
	{
	  children
	}
	- Footer
```
```
//childrens
  - Home
    - ArticleList
       - ArticleCard
    - TeamInfo
  - Detail
    -Article
    -SideList
    -Comments
      -CommentItem
```

store应该是下面这个结构，articles 中的 data 用来存放文章列表，article 中的 data 用来存放单个文章详情，comments 中的 data 用来存放 单个文章的所有评论

```javascript
[
  articles{
    status:'',
    data: '',
    errMsg: ''
  },
  article{
    status:'',
    data: '',
    errMsg: ''
  },
  comments{
    status:'',
    data: '',
    errMsg: ''
  }
]
```



## 测试：

将react结合redux之后，测试也相应的变得简单了。
主要测试三个部分：actions, components, reducers


+ aciton 测试主要用到这个 [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)

+ reducers 属于纯函数，比较好测

+ component 主要用 react 提供的 TestUtils

```
import TestUtils from 'react-addons-test-utils'
```

## 有待深入研究的地方

1. 正则匹配

2. react（官方文档）

3. redux实现原理，将异步action抽象的能力

4. 将markdown转化为html的库[marked](https://github.com/chjj/marked)

## 解决的难题

1. 将react引入redux，并加入测试。

2. 将文章正文（body）中的最开始的第一张图片作为 ArticleCard 封面图，如果文章最开始没有图片，会默认提供一张图片作为封面图片。

3. 将文章正文（body）中除去最开始的那张图片的一部分内容，作为 ArticleCard 描述部分。

4. 假如data中的某个item没有数据，那么在data.map的时候，就会提示data is undefined，已解决，要注意。


## 有待或优化完善的地方

1. 开发环境和生产环境的区分，package.json中的依赖属于开发环境还是生产有些混乱，下次应注意。

2. 在将markdown格式的文本转化为html格式的时候，用到了[marked](https://github.com/chjj/marked)，也依葫芦画瓢运用了语法高亮，有必要稍稍深入了解一下。比如能自定义一些className属性

3. 将action 中 Fetch 简化，目前这种方式有点蠢，每一个异步请求都得写4个函数（也就是action），看起来向下面这样。这样写的话，每加一个请求就得加至少4个函数，感觉代码量有点多，但是这方面优化暂时没有什么思路


```javascript
function fetchArticleRequest() {
  return {
    type: 'FETCH_ARTICLE_REQUEST'
  }
}
function fetchArticleSuccess(json) {
  return {
    type: 'FETCH_ARTICLE_SUCCESS',
    Article: json
  }
}
function fetchArticleFailure(err) {
  return {
    type: 'FETCH_ARTICLE_FAILURE',
    err: err
  }
}
export function fetchArticle(api) {
  return dispatch => {
    dispatch(fetchArticleRequest())
    return fetch(api)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchArticleSuccess(json))    
      })
      .catch((err) => {        
        dispatch(fetchArticleFailure(err))
      })
  }
}
```

1. 回复的内容
2. 预览的内容






