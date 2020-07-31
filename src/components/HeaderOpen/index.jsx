import React from 'react';

import { HeaderFired, Wrapper } from './styles';
import LogoFired from '../LogoFired';
import ButtonFired from '../ButtonFired';

function HeaderOpen() {
  return (
    <HeaderFired>
      <Wrapper>
        <LogoFired />

        <ButtonFired as="a" href="/video/new">
          Entrar
        </ButtonFired>
      </Wrapper>
    </HeaderFired>
  );
}

export default HeaderOpen;
