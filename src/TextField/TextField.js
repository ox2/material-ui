import React, { PropTypes } from 'react';
import { default as MaterialTextField } from 'material-ui/TextField';

const styles = {
  label: {
    fontSize: '18px',
  },
  input: {
    fontFamily: 'Roboto Condensed',
    fontSize: '18px',
  },
};

/**
 * TextField Component
 */
const TextField = ({ ...rest }) => (
  <MaterialTextField
    floatingLabelFixed={true}
    floatingLabelStyle={styles.label}
    fullWidth={true}
    inputStyle={styles.input}
    {...rest}
  />
);

TextField.propTypes = {
  errorText: PropTypes.any,
  focusColor: PropTypes.string,
};


export default TextField;
