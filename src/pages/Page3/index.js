import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '../../components/Select';
import {nextPage, updateSelected, updateData} from "../../actions/actionCreators";
import {getDataSelector, getUpdateData} from "../../selector/index";

class Page3 extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedOption) {
    const {state, dispatch, dataSelector} = this.props;
    dispatch(updateSelected({[dataSelector.key]: selectedOption.value}));
    dispatch(updateData(getUpdateData(state, dataSelector.key, selectedOption.value)));
    dispatch(nextPage(4));
  }
  render() {
    const {dataSelector} = this.props;
    return (
      <div>
        <div className="App-intro">
          Select diamond {dataSelector.key} type:
        </div>
        <Select data={dataSelector.data} handleChange={this.handleChange}/>
      </div>
    );
  }
}

Page3.propTypes = {
  dataSelector: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    dataSelector: getDataSelector(state),
    state: state
  }
};

export default connect(
  mapStateToProps
)(Page3);