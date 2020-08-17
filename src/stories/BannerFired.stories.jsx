import React from 'react';
import BannerFired from '../components/BannerFired';
import ThumbFired from '../components/ThumbFired';
import kikano from './assets/img/kikano.png';
import lucasMelo from './assets/img/lucas-melo.png';

export default {
  title: 'BannerFired',
  component: BannerFired,
};

export const Default = () => (
  <BannerFired
    tag="Criadores de jogos"
    title="Boas vindas a FiredLabs"
    description="Aqui nós trocamos conhecimento sobre como criar jogos felizes, nós
            BRs jogamos muito então está na hora de também criarmos muitos
            jogos!"
  >
    <ThumbFired
      src={kikano}
      alt="Boas vindas a FiredLabs"
      title="Boa vindas a FiredLabs"
      avatar={lucasMelo}
      channelName="FiredLabs"
      timer="00:01:00"
    />
  </BannerFired>
);

export const Column = () => (
  <BannerFired
    tag="Criadores de jogos"
    title="Boas vindas a FiredLabs"
    description="Aqui nós trocamos conhecimento sobre como criar jogos felizes, nós
            BRs jogamos muito então está na hora de também criarmos muitos
            jogos!"
    column
  >
    <ThumbFired
      src={kikano}
      alt="Boas vindas a FiredLabs"
      title="Boa vindas a FiredLabs"
      avatar={lucasMelo}
      channelName="FiredLabs"
      timer="00:01:00"
    />
  </BannerFired>
);
