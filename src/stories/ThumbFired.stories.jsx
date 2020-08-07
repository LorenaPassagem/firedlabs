import React from 'react';
import ThumbFired from '../components/ThumbFired';
import kikano from './assets/img/kikano.png';
import lucasMelo from './assets/img/lucas-melo.png';

export default {
  title: 'ThumbFired',
  component: ThumbFired,
};

export const Default = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ThumbFired
      title="Criando jogos"
      src={kikano}
      alt="Criando jogos em pixel art"
      avatar={lucasMelo}
      channelName="Lucasmml"
      timer="00:20:00"
    />
  </div>
);
