import fetch from 'isomorphic-fetch'

const fetchArticleListRequest = () => {
  return {
    type: 'FETCH_ARTICLE_LIST_REQUEST'
  }
}

const fetchArticleListSuccess = (json, end) => {
  return {
    type: 'FETCH_ARTICLE_LIST_SUCCESS',
    ArticleList: json,
    end: end
  }
}

const fetchArticleListFailure = (err) => {
  return {
    type: 'FETCH_ARTICLE_LIST_FAILURE',
    err: err
  }
}

export const fetchArticleList = (api) => {
  return dispatch => {
    dispatch(fetchArticleListRequest())

    return fetch(api).then(response => response.json()).then(json => {
      const len = json.length

      if(len < 20) {
        dispatch(fetchArticleListSuccess(json, true))
      } else {
        dispatch(fetchArticleListSuccess(json, false))
      }
    }).catch((err) => {
      dispatch(fetchArticleListFailure(err))
    })
  }
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
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
