import styled from 'styled-components';
import LogoFired from '../LogoFired';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22rem;
  background-color: var(--color-black-medium);
  color: var(--color-floral-white);
  padding: 20rem 0;
  border-top: 2px solid var(--color-floral-white);

  & > ${LogoFired} {
    margin-bottom: 15rem;
    height: 80px;
  }
`;

export default FooterStyle;
