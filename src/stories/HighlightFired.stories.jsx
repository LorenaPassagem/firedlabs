import React from 'react';
import HightlightFired from '../components/HighlightFired';

export default {
  title: 'HighlightFired',
  component: HightlightFired,
};

export const Default = () => (
  <div style={{ fontSize: '20rem' }}>
    <HightlightFired>Texto em destaque</HightlightFired>
  </div>
);
