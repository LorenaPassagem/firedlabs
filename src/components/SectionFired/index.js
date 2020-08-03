import styled from 'styled-components';
import TagFired from '../TagFired';
import DescriptionFired from '../DescriptionFired';

const SectionFired = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagFired} {
    margin-bottom: 40rem;
  }

  & > ${TagFired}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }
  & > ${DescriptionFired} {
    max-width: 820px;
    margin: 0 auto 40rem;
  }
`;

export default SectionFired;
