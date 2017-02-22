export default (state = {
  status:'',
  data: [],
  page: 1,
  loading: false,
  errMsg: '',
  end: false
}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_LIST_REQUEST':
      // Object 格式 { a: 1, b: 2 }
      // Object.assign({}, {}, {}, {}, {})
      return Object.assign({}, state, { status: 'fetch_start', loading: true })
    case 'FETCH_ARTICLE_LIST_SUCCESS':
      return Object.assign({}, state, { status: 'fetch_success', data: state.data.concat(action.ArticleList), page: state.page + 1, loading: false, end: action.end })
    case 'FETCH_ARTICLE_LIST_FAILURE':
      return Object.assign({}, state, { status: 'fetch_failure', errMsg: action.err })
    default:
      return state
  }
}
