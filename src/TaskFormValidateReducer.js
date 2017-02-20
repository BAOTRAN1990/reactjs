const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.effort) {
    errors.effort = 'Required';
  } else if (!isNumber(values.effort)) {
    errors.effort = 'Effort must be a number.';
  }
  if (!values.createdDate) {
    errors.createdDate = 'Required';
  }
  return errors;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export default validate;