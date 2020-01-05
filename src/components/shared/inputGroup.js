import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";

/**
 * @description any passed prop will be passed down to the input  (!!Read reactstrap input props for more information)*/

const InputGroup = props => {
  const error = props.error;
  const inputProps = { ...props };
  delete inputProps.label;
  delete inputProps.error;
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input
        {...inputProps}
        invalid={!!error}
        valid={!!props.defaultValue && !error}
      />
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

InputGroup.propTypes = {
  /** Input label title */
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  /** Pass error string to display an error message */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default InputGroup;
