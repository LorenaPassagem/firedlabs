import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagFired from '../TagFired';
import TitleFired from '../TitleFired';
import DescriptionFired from '../DescriptionFired';
import { WrapperThumb } from '../ThumbFired/styles';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  & > ${TagFired} {
    margin-bottom: 40rem;
  }

  & > ${TitleFired} {
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

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;

    & > ${TagFired} {
      box-sizing: border-box;
      padding: 15rem 12rem;
      margin-bottom: 20rem;
      font-size: 36rem;
      width: 100%;
    }
  }

  @media (max-width: 355px) {
    & > ${TagFired} {
      font-size: 30rem;
    }
  }
`;

export const BannerStyle = styled.section`
  ${container};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 60rem;
    max-height: none;
    height: auto;

    & ${WrapperThumb} {
      width: 800px;
    }
  }

  @media (max-width: 800px) {
    & ${WrapperThumb} {
      width: 94vw;
    }
  }
`;
