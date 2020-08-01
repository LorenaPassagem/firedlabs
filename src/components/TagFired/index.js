import styled, { css } from 'styled-components';

const TagFired = styled.h2`
  display: inline-block;
  font-size: 55rem;
  letter-spacing: 2px;
  background-color: var(--color-fiery-rose);
  padding: 20rem 18rem;
  color: var(--color-floral-white);

  ${({ small }) =>
    small &&
    css`
      font-size: 25rem;
      padding: 8rem 10rem;
    `};
`;

export default TagFired;
