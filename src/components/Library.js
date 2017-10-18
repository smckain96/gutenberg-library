import React, { Component } from 'react';
import '../App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLibrary } from '../actions/library';



class App extends Component {
  componentDidMount() {
    getLibrary()
    console.log('state', this.state, 'props', this.props)
  }

  render() {
    return (
      <div className="Library">

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    library: state.library
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(getLibrary, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
