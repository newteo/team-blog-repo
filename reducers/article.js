let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

export default function article (state = InitState, action) {
	switch (action.type) {
		case 'FETCH_ARTICLE_REQUEST':
			return Object.assign({}, state, {status: 'fetch_start'})
		case 'FETCH_ARTICLE_SUCCESS':
			return Object.assign({}, state, {status: 'fetch_success', data: action.ArticleList})
		case 'FETCH_ARTICLE_FAILURE':
			return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
		default:
			return state
	}
}