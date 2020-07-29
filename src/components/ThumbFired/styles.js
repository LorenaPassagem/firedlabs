import styled from 'styled-components';

export const Avatar = styled.img`
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-frontend);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
    width: 100%;
`;



export const WrapperThumb = styled.figure`
    /* opacity: 0; */
    position: relative;
    border: var(--border) solid var(--color-frontend);
    width: 640px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;

    &:hover {
        transform: translate(var(--move-space), var(--move-space));

        & > ${Avatar} {
            transform: translateX(0);
            opacity: 1;
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
        }    
    }
`;

export const Background = styled.div`
    --space: 20rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1);

    position: relative;
    background-color: var(--color-frontend);

    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: calc(var(--space) + var(--border));
        height: calc(var(--space) + var(--border));
        background-color: red;
        transform-origin: right top;
        transition: transform 100ms linear;
    }

    &:hover {
        &::before {
            transform: rotate(45deg);
        }
    }
`