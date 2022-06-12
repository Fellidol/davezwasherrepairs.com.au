import styled, { css } from "styled-components";
import Text from "../Text";

export const Outer = styled.div`
  max-width: 990px;
  padding: 60px 16px 0;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-shadow: "0px 0px 5px black";

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const Heading = styled.div`
  margin: 16px 0;
  text-transform: uppercase;
  font-size: 1.9rem;
  font-weight: 400;
  color: #fff;
  @media (min-width: 992px) {
    font-size: 2.4rem;
  }
`;

export const SubHeading = styled.div`
  margin-bottom: 16px;
  font-size: 1.3rem;
  font-weight: 400;
  color: #fff;
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
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

export const Button = styled.a`
  white-space: nowrap;
  background-color: #008cba;
  border-radius: 5px;
  padding: 6px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.span`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media (min-width: 992px) {
    width: 25px;
    height: 25px;
  }
`;

export const ButtonText = styled(Text)`
  display: block;
  margin: 0;
  color: #fff;
  text-shadow: none;
`;

export const HeroImage = styled.div`
  position: relative;
  aspect-ratio: 16/8;
  margin: 30px auto;
  max-width: 818px;
`;

export const Offer = styled(Text)`
  position: relative;
  text-align: center;
  color: #fff;
  background: #039200;
  padding: 16px;
  border-radius: 5px;
`;
