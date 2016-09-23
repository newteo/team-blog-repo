let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

export default function articles (state = InitState, action) {
	switch (action.type) {
		case 'FETCH_ARTICLE_LIST_REQUEST':
			return Object.assign({}, state, {status: 'fetch_start'})
		case 'FETCH_ARTICLE_LIST_SUCCESS':
			return Object.assign({}, state, {status: 'fetch_success', data: action.ArticleList})
		case 'FETCH_ARTICLE_LIST_FAILURE':
			return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
		default:
			return state
	}
}

