import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import articles from './articles'
import article from './article'
import comments from './comments'

const rootReducer = combineReducers({
	articles,
	article,
	comments,
  routing,

})

export default rootReducer
