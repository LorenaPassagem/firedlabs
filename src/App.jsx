import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterFired from './components/FooterFired';
import LogoImersao from './components/LogoImersao';
import BannerFired from './components/BannerFired';
import TagFired from './components/TagFired';
import TitleFired from './components/TitleFired';

function App() {
  return (
    <>
      <HeaderFired>
        <LogoFired />

        <ButtonFired>Novo vídeo</ButtonFired>
      </HeaderFired>

      <BannerFired>
        <TagFired>FrontEnd</TagFired>
        <TitleFired>Gueio Runner - Kikano Reeves</TitleFired>
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
