//test done
import expect from 'expect'
import article from '../../reducers/article'

let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

describe.skip('article reducer', () => {
	it('should return the initial state', () => {
		expect(article(undefined, {})).toEqual(InitState)
	})
	it('should handle FETCH_ARTICLE_REQUEST', () => {
		expect(
			article([], {
			type: 'FETCH_ARTICLE_REQUEST'
		})
		).toEqual({
		  status:'fetch_start',
		})
	})
	it('should handle FETCH_ARTICLE_SUCCESS', () => {
		expect(
			article([], {
			type: 'FETCH_ARTICLE_SUCCESS',
			Article: 'hello'
		})
		).toEqual({
		  status:'fetch_success',
		  data: 'hello'
		})
	})
	it('should handle FETCH_ARTICLE_FAILURE', () => {
		expect(
			article([], {
			type: 'FETCH_ARTICLE_FAILURE',
			err: 'world'
		})
		).toEqual({
		  status:'fetch_failure',
		  errMsg: 'world'
		})
	})
})
