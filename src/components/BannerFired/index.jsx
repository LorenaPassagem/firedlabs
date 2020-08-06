import React from 'react';
import PropTypes from 'prop-types';
import { BannerStyle, Text } from './styles';
import TagFired from '../TagFired';
import TitleFired from '../TitleFired';
import DescriptionFired from '../DescriptionFired';

function BannerFired({ children, tag, title, description }) {
  return (
    <BannerStyle>
      <Text>
        <TagFired>{tag}</TagFired>
        <TitleFired>{title}</TitleFired>
        <DescriptionFired>{description}</DescriptionFired>
      </Text>

      {children}
    </BannerStyle>
  );
}

BannerFired.propTypes = {
  children: PropTypes.element.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerFired;
