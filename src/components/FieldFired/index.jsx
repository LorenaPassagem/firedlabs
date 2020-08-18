import React from 'react';
import PropTypes from 'prop-types';

import FieldStyle from './styles';
import LabelFired from '../LabelFired';
import InputFired from '../InputFired';
import ErrorFired from '../ErrorFired';

function FieldFired({ label, id, placeholder, name, register, errors }) {
  console.log('errors in fieldfired', errors);
  return (
    <FieldStyle activeError={errors}>
      <LabelFired for={id}>{label}</LabelFired>
      <InputFired
        id={id}
        placeholder={placeholder}
        name={name}
        ref={register({ required: true })}
      />
      <ErrorFired>Email é obrigatório</ErrorFired>
    </FieldStyle>
  );
}

FieldFired.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default FieldFired;
