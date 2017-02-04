import test from 'ava'
import commentsReducer from '../../reducers/comments'

test('initial states', (t) => {
  t.deepEqual(commentsReducer({
    status:'',
    data: '',
    errMsg: ''
  }, {}), {
    status:'',
    data: '',
    errMsg: ''
  })
})

test('fetch starting states', (t) => {
  t.deepEqual(commentsReducer({}, {
    type: 'FETCH_COMMENT_REQUEST'
  }), {
    status: 'fetch_start'
  })
})

test('fetch success states', (t) => {
  t.deepEqual(commentsReducer({}, {
    type: 'FETCH_COMMENT_SUCCESS',
    comment: 'see ya!'
  }), {
    status: 'fetch_success',
    data: 'see ya!'
  })
})

test('fetch failure states', (t) => {
  t.deepEqual(commentsReducer({}, {
    type: 'FETCH_COMMENT_FAILURE',
    err: '404'
  }), {
    status: 'fetch_failure',
    errMsg: '404'
  })
})
