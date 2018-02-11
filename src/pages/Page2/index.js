import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCarat, getUpdateData} from "../../selector/index";
import {nextPage, updateSelected, updateData} from "../../actions/actionCreators";
import Select from '../../components/Select';

class Page2 extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedOption) {
    const {state, dispatch} = this.props;
    dispatch(updateSelected({carat: selectedOption.value}));
    dispatch(updateData(getUpdateData(state, 'carat', selectedOption.value)));
    dispatch(nextPage(3));
  }
  render() {
    return (
      <div>
        <div className="App-intro">
          Select diamond carat type:
        </div>
        <Select data={this.props.carat} handleChange={this.handleChange}/>
      </div>
    );
  }
}

Page2.propTypes = {
  carat: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    carat: getCarat(state),
    state: state
  }
};

export default connect(
  mapStateToProps
)(Page2);