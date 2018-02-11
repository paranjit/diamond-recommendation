import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Recommend from './pages/Recommend';
import './App.css';

class App extends Component {
  render() {
    const {page} = this.props;

    let currentPage = null;
    if (page === 1) {
      currentPage = <Page1 />;
    } else if (page === 2) {
      currentPage = <Page2 />;
    } else if (page === 3) {
      currentPage = <Page3 />;
    } else {
      currentPage = <Recommend />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Diamond Recommendation System</h1>
        </header>
        <div className="App-body">
          {currentPage}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    page: state.page
  }
};

export default connect(
  mapStateToProps
)(App);
