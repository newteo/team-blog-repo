import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    const { children, articles, actions, article, comments } = this.props
    return (
      <div>
        <Topbar />        
        {
          children && React.cloneElement(children, {
            actions: actions,
            articles: articles,
            article: article,
            comments: comments
          })
        }
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    article: state.article,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)