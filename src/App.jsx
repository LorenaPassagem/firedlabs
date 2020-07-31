import React from 'react';
import { BannerFired, Text } from './components/BannerFired';
import TagFired from './components/TagFired';
import TitleFired from './components/TitleFired';
import DescriptionFired from './components/DescriptionFired';
import ThumbFired from './components/ThumbFired';
import kikano from './assets/img/kikano.png';
import lucasMelo from './assets/img/lucas-melo.png';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionFired from './components/SectionFired';

const videos = [
  {
    src: { kikano },
    alt: 'Boas vindas a FiredLabs',
    title: 'Boa vindas a FiredLabs',
    avatar: { lucasMelo },
    channelName: 'Lucasmml',
    timer: '00:01:00',
    link: 'https:"//twitch.tv/lucasmml',
  },
  {
    src: { kikano },
    alt: 'Boas vindas a FiredLabs',
    title: 'Boa vindas a FiredLabs',
    avatar: { lucasMelo },
    channelName: 'Lucasmml',
    timer: '00:01:00',
    link: 'https:"//twitch.tv/lucasmml',
  },
  {
    src: { kikano },
    alt: 'Boas vindas a FiredLabs',
    title: 'Boa vindas a FiredLabs',
    avatar: { lucasMelo },
    channelName: 'Lucasmml',
    timer: '00:01:00',
    link: 'https:"//twitch.tv/lucasmml',
  },
  {
    src: { kikano },
    alt: 'Boas vindas a FiredLabs',
    title: 'Boa vindas a FiredLabs',
    avatar: { lucasMelo },
    channelName: 'Lucasmml',
    timer: '00:01:00',
    link: 'https:"//twitch.tv/lucasmml',
  },
];

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerFired>
        <Text>
          <TagFired>Criadores de jogos</TagFired>
          <TitleFired>Boas vindas a FiredLabs</TitleFired>
          <DescriptionFired>
            Aqui nós trocamos conhecimento sobre como criar jogos felizes, nós
            BRs jogamos muito então está na hora de também criamos muitos jogos!
          </DescriptionFired>
        </Text>

        <ThumbFired
          src={kikano}
          alt="Boas vindas a FiredLabs"
          title="Boa vindas a FiredLabs"
          avatar={lucasMelo}
          channelName="FiredLabs"
          timer="00:01:00"
        />
      </BannerFired>

      <SectionFired>
        <TagFired>Gueio Runner</TagFired>

        <DescriptionFired>
          #GueioRunner é jogo multiplayer 2d criado todo em pixel art e
          desenvolvido ao vivo por dois canais na twitch, as pessoas por trás do
          projeto são muitas mas quem leva nas costas a ideia são: Joviane
          Jardim, Lucas Mello e Marco Bruno.
        </DescriptionFired>

        {/* <CarouselFired videos={videos} /> */}
      </SectionFired>

      <FooterOpen />
    </>
  );
}

export default App;
