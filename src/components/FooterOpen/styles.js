import styled from 'styled-components';
import LogoStyle from '../LogoFired/styles';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22rem;
  background-color: var(--color-arsenic);
  color: var(--color-floral-white);
  padding: 20rem 0;
  border-top: 4px solid var(--color-floral-white);

  & > ${LogoStyle} {
    margin-bottom: 15rem;
  }
`;

export default FooterStyle;
