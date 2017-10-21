import React, { Component } from 'react';
import '../App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLibrary } from '../actions/library';



class Library extends Component {
  componentDidMount() {
    getLibrary()
    console.log('state', this.state)
    console.log('props', this.props)
  }

  render() {
    // let libraryList = this.state.library.map((entry) => {
    //   return (
    //     <div className="library-entry" id={entry.id}></div>
    //   )
    // })
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

export default connect(mapDispatchToProps, mapStateToProps)(Library);
