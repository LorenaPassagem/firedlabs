import styled, { css } from 'styled-components';
import ErrorFired from '../ErrorFired';
import InputFired from '../InputFired';

const FieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 15rem;
  width: 100%;
  padding-bottom: 30rem;

  & > ${InputFired} {
    position: relative;
    z-index: 1;
  }

  & > ${ErrorFired} {
    position: absolute;
    width: 100%;
    bottom: 0;
    transform: translateY(-100%);
    transition: transform 100ms linear;

    ${({ activeError }) => {
      console.log('activeError', activeError);
      return (
        activeError &&
        css`
          transform: translateY(0);
        `
      );
    }};
  }
`;

export default FieldStyle;
