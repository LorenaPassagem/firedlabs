import React from 'react';
import { Background, WrapperThumb, Thumb, Avatar, Channel } from './styles';
import AvatarFired from '../AvatarFired';

function ThumbFired({ src, alt, avatar, channelName }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarFired photo={avatar} channelName={channelName} />
            </WrapperThumb>
        </Background>
    );
}

export default ThumbFired;