import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterFired from './components/FooterFired';
import LinkFired from './components/LinkFired';
import HighlightFired from './components/HighlightFired';
import LogoImersao from './components/LogoImersao';

function App() {
  return (
    <>
      <HeaderFired>
        <LogoFired />

        <ButtonFired>Novo vídeo</ButtonFired>
      </HeaderFired>

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
