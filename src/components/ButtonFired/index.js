import styled from 'styled-components';

const ButtonFired = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12rem 30rem;
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  font-size: 16rem;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-medium);
    transform-origin: bottom left;
    transform: translateX(100%) scaleX(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after {
    content: '${({ children }) => children}';
    position: absolute;
  }

  &:hover::before {
    transform: translateX(-30%) scaleX(1.5) skew(-30deg);
  }
`;

export default ButtonFired;
