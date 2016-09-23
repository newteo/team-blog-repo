//test done
import expect from 'expect'
import { fetchComment } from '../../actions'
import { COMMENT_API } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe.skip('fetchComment action', () => {
	it('Get comment should sucess with correctly api', () => {
		const store = mockStore({})
		return	store.dispatch(fetchComment(COMMENT_API))
			.then(() => {
				expect(store.getActions()[1].type).toEqual('FETCH_COMMENT_SUCCESS')
			})
	})
})