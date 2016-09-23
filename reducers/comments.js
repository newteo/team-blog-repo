let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

export default function comments (state = InitState, action) {
	switch (action.type) {
		case 'FETCH_COMMENT_REQUEST':
			return Object.assign({}, state, {status: 'fetch_start'})
		case 'FETCH_COMMENT_SUCCESS':
			return Object.assign({}, state, {status: 'fetch_success', data: action.comment})
		case 'FETCH_COMMENT_FAILURE':
			return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
		default:
			return state
	}
}