import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '../../components/Select';
import {nextPage, updateSelected, updateData} from "../../actions/actionCreators";
import {getCut, getUpdateData} from "../../selector/index";

class Page1 extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedOption) {
    const {state, dispatch} = this.props;
    dispatch(updateSelected({cut: selectedOption.value}));
    dispatch(updateData(getUpdateData(state, 'cut', selectedOption.value)));
    dispatch(nextPage(2));
  }
  render() {
    return (
      <div>
        <div className="App-intro">
          Select diamond cut type:
        </div>
        <Select data={this.props.cut} handleChange={this.handleChange}/>
      </div>
    );
  }
}

Page1.propTypes = {
  cut: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cut: getCut(state),
    state: state
  }
};

export default connect(
  mapStateToProps
)(Page1);