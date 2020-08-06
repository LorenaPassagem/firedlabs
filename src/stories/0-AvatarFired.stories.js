/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AvatarFired from '../components/AvatarFired';
import lucasMelo from './assets/lucas-melo.png';

export default {
  title: 'AvatarFired',
  component: AvatarFired,
};

export const Default = () => (
  <AvatarFired photo={lucasMelo} channelName="Lucasmml" />
);
