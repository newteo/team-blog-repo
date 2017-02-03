import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import articles from './articles'
import article from './article'
import comments from './comments'

const rootReducer = combineReducers({
  // Object 格式 { a, b, c }，拒絕 { a, b, c, }
  articles,
  article,
  comments,
  routing
})

export default rootReducer
