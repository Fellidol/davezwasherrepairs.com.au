import styled, { css } from "styled-components";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Text from "../Text";

export const Outer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 990px;
  padding: 60px 16px 0;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-shadow: "0px 0px 5px black";
`;

export const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

export const Heading = styled(Heading1)`
  text-transform: uppercase;
  color: #fff;
  margin: 16px 0;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SubHeading = styled(Heading2)`
  font-weight: 400;
  color: #fff;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const CallText = styled(Text)`
  margin-bottom: 8px;
`;

export const HeroImage = styled.div`
  position: relative;
  aspect-ratio: 16/8;
  margin: 30px auto;
  max-width: 818px;
`;

export const OfferContainer = styled.div`
  text-align: center;
`;

export const Offer = styled(Text)`
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: rgba(3, 146, 0, 0.85);
  padding: 16px 30px;
  margin: 0;
  border-radius: 5px;
`;
