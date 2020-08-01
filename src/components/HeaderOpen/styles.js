import styled from 'styled-components';
import ButtonFired from '../ButtonFired';
import LogoFired from '../LogoFired';
import container from '../../styles/tools/container';

export const HeaderFired = styled.header`
  background-color: var(--color-arsenic);
  border-bottom: 4px solid var(--color-floral-white);
  padding: 20rem 30rem;

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
      background-color: var(--color-fiery-rose);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;
