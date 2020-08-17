import React from 'react';
import PropTypes from 'prop-types';

import FieldStyle from './styles';
import LabelFired from '../LabelFired';
import InputFired from '../InputFired';

function FieldFired({ label, id, placeholder }) {
  return (
    <FieldStyle>
      <LabelFired for={id}>{label}</LabelFired>
      <InputFired id={id} placeholder={placeholder} />
    </FieldStyle>
  );
}

FieldFired.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FieldFired;
