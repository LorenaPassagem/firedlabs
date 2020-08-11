import styled from 'styled-components';
import ButtonFired from '../ButtonFired';
import LogoFired from '../LogoFired';

export const HeaderFired = styled.header`
  background-color: var(--color-black-medium);
  padding: 20rem 30rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

    & > ${LogoFired} {
      height: 35px;
    }

    & > ${ButtonFired} {
      box-sizing: border-box;
      background-color: var(--color-fiery-rose);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
      width: 100vw;
      box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
