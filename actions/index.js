import fetch from 'isomorphic-fetch'


function fetchArticleListRequest() {
  return {
    type: 'FETCH_ARTICLE_LIST_REQUEST'
  }
}
function fetchArticleListSuccess(json) {
  return {
    type: 'FETCH_ARTICLE_LIST_SUCCESS',
    ArticleList: json
  }
}
function fetchArticleListFailure(err) {
  return {
    type: 'FETCH_ARTICLE_LIST_FAILURE',
    err: err
  }
}

export function fetchArticleList(api) {
  return dispatch => {
    dispatch(fetchArticleListRequest())
    return fetch(api)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchArticleListSuccess(json))    
      })
      .catch((err) => {        
        dispatch(fetchArticleListFailure(err))
      })
  }
}

function fetchArticleRequest() {
  return {
    type: 'FETCH_ARTICLE_REQUEST'
  }
}
function fetchArticleSuccess(json) {
  return {
    type: 'FETCH_ARTICLE_SUCCESS',
    ArticleList: json
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

function fetchCommentRequest() {
  return {
    type: 'FETCH_COMMENT_REQUEST'
  }
}
function fetchCommentSuccess(json) {
  return {
    type: 'FETCH_COMMENT_SUCCESS',
    comment: json
  }
}
function fetchCommentFailure(err) {
  return {
    type: 'FETCH_COMMENT_FAILURE',
    err: err
  }
}

export function fetchComment(api) {
  return dispatch => {
    dispatch(fetchCommentRequest())
    return fetch(api)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchCommentSuccess(json))    
      })
      .catch((err) => {        
        dispatch(fetchCommentFailure(err))
      })
  }
}

