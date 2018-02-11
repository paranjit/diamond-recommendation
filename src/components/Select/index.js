import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const Select = props => {
  const { selectedOption } = props;
  const value = selectedOption && selectedOption.value;
  const divStyle = {
    width: '50%',
    margin: '0 auto'
  };

  return (
    <div style={divStyle}>
      <ReactSelect
        name="form-field-name"
        value={value}
        onChange={props.handleChange}
        options={props.data}
      />
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.object
};

export default Select;