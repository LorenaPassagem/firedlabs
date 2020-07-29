import React from 'react';
import { Background, WrapperThumb, Thumb, Title } from './styles';
import AvatarFired from '../AvatarFired';

function ThumbFired({ src, alt, avatar, channelName, title }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarFired photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbFired;