export default (state = {
  status:'',
  data: '',
  errMsg: ''
}, action) => {
  switch (action.type) {
    case 'FETCH_COMMENT_REQUEST':
      // Object 格式 { a: 1, b: 2 }
      // Object.assign({}, {}, {}, {}, {})
      return Object.assign(state, { status: 'fetch_start' })
    case 'FETCH_COMMENT_SUCCESS':
      return Object.assign(state, { status: 'fetch_success', data: action.comment })
    case 'FETCH_COMMENT_FAILURE':
      return Object.assign(state, { status: 'fetch_failure', errMsg: action.err })
    default:
      return state
  }
}
