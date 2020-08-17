import React from 'react';
import FieldFired from '../components/FieldFired';

export default {
  title: 'FieldFired',
  component: FieldFired,
};

export const Default = () => (
  <FieldFired id="email" label="Email" placeholder="seu.email@gmail.com" />
);
