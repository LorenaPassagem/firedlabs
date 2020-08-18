import React from 'react';
import { useForm } from 'react-hook-form';

import FormStyle from './styles';
import FieldFired from '../FieldFired';
import ButtonFired from '../ButtonFired';

function FormGueioRunner() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <FieldFired
        id="email"
        label="Email para receber o jogo"
        name="email"
        register={register}
        placeholder="Seu email"
        errors={errors.email}
      />

      <ButtonFired type="submit">Enviar</ButtonFired>
    </FormStyle>
  );
}

export default FormGueioRunner;
