import styled from 'styled-components';
import TagFired from '../TagFired';
import DescriptionFired from '../DescriptionFired';

const SectionFired = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagFired} {
    margin: 0 16rem 40rem;
  }

  & > ${TagFired}:not(:first-child) {
    margin-left: 30rem;
    margin-bottom: 5rem;
    align-self: flex-start;
  }

  & > ${DescriptionFired} {
    max-width: 820px;
    padding-left: 16rem;
    padding-right: 16rem;
    margin: 0 auto 40rem;
  }

  @media (max-width: 360px) {
    & > ${TagFired}:first-child {
      font-size: 46rem;
    }
  }
`;

export default SectionFired;
