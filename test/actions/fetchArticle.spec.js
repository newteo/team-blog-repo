//test done

import expect from 'expect'
import { fetchArticle } from '../../actions'
import { ARTICLE_API } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe.skip('fetchArticle action', () => {
	it('Get article should sucess with correctly api', () => {
		const store = mockStore({})
		return	store.dispatch(fetchArticle(ARTICLE_API))
			.then(() => {
				expect(store.getActions()[1].type).toEqual('FETCH_ARTICLE_SUCCESS')
			})
	})
})