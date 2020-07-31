import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagFired from '../TagFired';
import DescriptionFired from '../DescriptionFired';

const SectionFired = styled.section`
  padding-top: 20rem;
  padding-bottom: 20rem;
  ${container};
  text-align: center;

  & > ${TagFired} {
    margin-bottom: 40rem;
  }

  & > ${DescriptionFired} {
    max-width: 820px;
    margin: 0 auto 40rem;
  }
`;

export default SectionFired;
