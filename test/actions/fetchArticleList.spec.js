//test done

import expect from 'expect'
import { fetchArticleList } from '../../actions'
import { ARTICLES_API } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe.skip('fetchArticleList action', () => {
	it('Get articles should sucess with correctly api', () => {
		const store = mockStore({})

		return	store.dispatch(fetchArticleList(ARTICLES_API))
			.then(() => {
				expect(store.getActions()[1].type).toEqual('FETCH_ARTICLE_LIST_SUCCESS')
			})
	})
})