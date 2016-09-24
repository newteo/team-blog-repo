//test done
import expect from 'expect'
import comments from '../../reducers/comments'

let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

describe.skip('comments reducer', () => {
	it('should return the initial state', () => {
		expect(comments(undefined, {})).toEqual(InitState)
	})
	it('should handle FETCH_COMMENT_REQUEST', () => {
		expect(
			comments([], {
			type: 'FETCH_COMMENT_REQUEST'
		})
		).toEqual({
		  status:'fetch_start',
		})
	})
	it('should handle FETCH_COMMENT_SUCCESS', () => {
		expect(
			comments([], {
			type: 'FETCH_COMMENT_SUCCESS',
			comment: 'hello'
		})
		).toEqual({
		  status:'fetch_success',
		  data: 'hello'
		})
	})
	it('should handle FETCH_COMMENT_FAILURE', () => {
		expect(
			comments([], {
			type: 'FETCH_COMMENT_FAILURE',
			err: 'world'
		})
		).toEqual({
		  status:'fetch_failure',
		  errMsg: 'world'
		})
	})
})
