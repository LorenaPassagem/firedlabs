import React from 'react';
import FooterStyle from './styles';
import LogoFired from '../LogoFired';
import LogoImersao from '../LogoImersao';

function FooterOpen() {
  return (
    <FooterStyle>
      <LogoFired />
      <p>
        Site feito na
        <a href="https://alura.com.br" aria-label="Logo">
          <LogoImersao />
        </a>
      </p>
    </FooterStyle>
  );
}

export default FooterOpen;
