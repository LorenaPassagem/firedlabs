import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarouselStyle, Wrapper, Right } from './styles';
import ThumbFired from '../ThumbFired';

function CarouselFired({ videos }) {
  const [moveRight, setMoveRight] = useState(false);

  function actionRight() {
    setMoveRight(true);
  }

  return (
    <CarouselStyle>
      <Wrapper moveRight={moveRight}>
        {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
          <ThumbFired
            src={src}
            alt={alt}
            title={title}
            avatar={avatar}
            channelName={channelName}
            timer={timer}
            link={link}
          />
        ))}
      </Wrapper>
      <Right onClick={actionRight} />
    </CarouselStyle>
  );
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CarouselFired.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarouselFired;
