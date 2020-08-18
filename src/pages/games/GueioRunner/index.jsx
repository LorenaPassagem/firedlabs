import React from 'react';
import HeaderOpen from '../../../components/HeaderOpen';
import FooterOpen from '../../../components/FooterOpen';
import BannerFired from '../../../components/BannerFired';
import ThumbFired from '../../../components/ThumbFired';
import kikano from '../../../assets/img/kikano.png';
import lucasMelo from '../../../assets/img/lucas-melo.png';
import FormGueioRunner from '../../../components/FormGueioRunner';

function GueioRunner() {
  return (
    <>
      <HeaderOpen />

      <BannerFired
        tag="Gueio Runner"
        title="Versão alpha e quase feliz"
        description="Gueio Runner é um jogo que conta a história do Gueio um passáro que tem uma AI dentro dele colocada pelo vilão sem nome..."
        column
      >
        <ThumbFired
          src={kikano}
          alt="Gueio Runner"
          title="Boa vindas a FiredLabs"
          avatar={lucasMelo}
          channelName="FiredLabs"
          timer="00:01:00"
        />

        <FormGueioRunner />
      </BannerFired>

      <FooterOpen />
    </>
  );
}

export default GueioRunner;
