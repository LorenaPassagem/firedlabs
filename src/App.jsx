import React from 'react';
import { HeaderFired, Wrapper } from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterFired from './components/FooterFired';
import LogoImersao from './components/LogoImersao';
import { BannerFired, Text } from './components/BannerFired';
import TagFired from './components/TagFired';
import TitleFired from './components/TitleFired';
import DescriptionFired from './components/DescriptionFired';
import ThumbFired from './components/ThumbFired';
import kikano from './assets/img/kikano.png';
import lucasMelo from './assets/img/lucas-melo.png';

function App() {
  return (
    <>
      <HeaderFired>
        <Wrapper>
          <LogoFired />

          <ButtonFired>Novo vídeo</ButtonFired>
        </Wrapper>
      </HeaderFired>

      <BannerFired>
        <Text>
          <TagFired>PixerArt</TagFired>
          <TitleFired>Gueio Runner - Kikano Reeves</TitleFired>
          <DescriptionFired>
            O Lucas Melo nesse vídeo fez o personagem Kikano Reeves do jogo Gueio Runner
          </DescriptionFired>
        </Text>

        <ThumbFired
          src={kikano}
          alt="Thumb do Lucas Melo fazendo o Kikano Reeves"
          avatar={lucasMelo}
          channelName="Lucasmml"
        />
      </BannerFired>

      <FooterFired>
        <LogoFired />
        <p>
          Site feito na <a href="https://alura.com.br"><LogoImersao /></a>
        </p>
      </FooterFired>
    </>
  );
}

export default App;
