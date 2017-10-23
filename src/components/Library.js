import React, { Component } from 'react';
import '../App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLibrary } from '../actions/library';
// import { LibraryEntry } from './LibraryEntry';



class Library extends Component {
  getLibrary() {
    this.props.getLibrary()
  }

  componentWillMount() {
    this.getLibrary()
    console.log(this.props)
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    //
    // let libraryList = this.state.library.map((entry) => {
    //   return (
    //     <LibraryEntry id={entry.id} />
    //   )
    // });

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
      getLibrary: bindActionCreators(getLibrary, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
