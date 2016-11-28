let InitState =
{
  status:'',
  data: [],
  page: 1,
  loading: false,
  errMsg: '',
  end: false
}

export default function articles (state = InitState, action) {
	switch (action.type) {
		case 'FETCH_ARTICLE_LIST_REQUEST':
			return Object.assign({}, state, {status: 'fetch_start', loading: true})
		case 'FETCH_ARTICLE_LIST_SUCCESS':
			return Object.assign({}, state, {status: 'fetch_success', data: state.data.concat(action.ArticleList), page: state.page+1, loading: false, end: action.end})
		case 'FETCH_ARTICLE_LIST_FAILURE':
			return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
		default:
			return state
	}
}

