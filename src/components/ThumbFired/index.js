import React from 'react';
import { Background, WrapperThumb, Thumb, Title, Timer } from './styles';
import AvatarFired from '../AvatarFired';

function ThumbFired({ src, alt, avatar, channelName, title, timer }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarFired photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
                <Timer>{timer}</Timer>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbFired;