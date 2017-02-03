export default (state = {
  status:'',
  data: '',
  errMsg: ''
}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_REQUEST':
      // Object 格式 { a: 1, b: 2 }
      // Object.assign({}, {}, {}, {}, {})
      return Object.assign(state, { status: 'fetch_start' })
    case 'FETCH_ARTICLE_SUCCESS':
      return Object.assign(state, { status: 'fetch_success', data: action.Article })
    case 'FETCH_ARTICLE_FAILURE':
      return Object.assign(state, { status: 'fetch_failure', errMsg: action.err })
    default:
      return state
  }
}
