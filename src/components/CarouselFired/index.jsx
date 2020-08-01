import React from 'react';
import PropTypes from 'prop-types';
import { CarouselStyle, Right } from './styles';
import ThumbFired from '../ThumbFired';

function CarouselFired({ videos }) {
  return (
    <CarouselStyle>
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
      <Right />
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
