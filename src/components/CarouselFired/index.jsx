import React, { useState, useRef, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import PropTypes from 'prop-types';
import { CarouselStyle, Wrapper, Left, Right } from './styles';
import ThumbFired from '../ThumbFired';

function CarouselFired({ videos }) {
  const [move, setMove] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const winWidth = useWindowWidth();
  const $wrapper = useRef(null);

  useEffect(
    () => setWrapperWidth($wrapper.current.getBoundingClientRect().width),
    []
  );

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  return (
    <CarouselStyle move={move} moveLastRight={wrapperWidth - winWidth}>
      <Left onClick={actionLeft} />
      <Wrapper ref={$wrapper}>
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
