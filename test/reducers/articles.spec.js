//test done
import expect from 'expect'
import articles from '../../reducers/articles'

let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

describe.skip('articles reducer', () => {
	it('should return the initial state', () => {
		expect(articles(undefined, {})).toEqual(InitState)
	})
	it('should handle FETCH_ARTICLE_LIST_REQUEST', () => {
		expect(
			articles([], {
			type: 'FETCH_ARTICLE_LIST_REQUEST'
		})
		).toEqual({
		  status:'fetch_start',
		})
	})
	it('should handle FETCH_ARTICLE_LIST_SUCCESS', () => {
		expect(
			articles([], {
			type: 'FETCH_ARTICLE_LIST_SUCCESS',
			ArticleList: 'hello'
		})
		).toEqual({
		  status:'fetch_success',
		  data: 'hello'
		})
	})
	it('should handle FETCH_ARTICLE_LIST_FAILURE', () => {
		expect(
			articles([], {
			type: 'FETCH_ARTICLE_LIST_FAILURE',
			err: 'world'
		})
		).toEqual({
		  status:'fetch_failure',
		  errMsg: 'world'
		})
	})
})
