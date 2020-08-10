import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagFired from '../TagFired';
import TitleFired from '../TitleFired';
import DescriptionFired from '../DescriptionFired';
import { WrapperThumb } from '../ThumbFired/styles';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  ${TagFired} {
    margin-bottom: 40rem;
  }

  ${TitleFired} {
    margin-bottom: 20rem;
  }

  @media (max-width: 1300px) {
    box-sizing: border-box;
    width: 468px;
    max-width: none;

    & > ${TitleFired}, & > ${DescriptionFired} {
      display: none;
    }
  }
`;

export const BannerStyle = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50rem;

    & ${WrapperThumb} {
      width: 500px;
    }
  }
`;
