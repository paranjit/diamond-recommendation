import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getRecommendedData} from "../../selector/index";

class Recommend extends Component {
  render() {
    const {recommendedData} = this.props;
    return (
      <div>
        <div className="App-intro">
          Diamond recommended:
        </div>
        {
          Object.keys(recommendedData).map(key =>
            <div key={key}>{key}: {recommendedData[key]}</div>
          )
        }
      </div>
    );
  }
}

Recommend.propTypes = {
  recommendedData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    recommendedData: getRecommendedData(state)
  }
};

export default connect(
  mapStateToProps
)(Recommend);