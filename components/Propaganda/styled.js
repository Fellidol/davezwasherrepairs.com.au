import styled from "styled-components";
import Card from "../Card";
import Text from "../Text";

export const WavesTopContainer = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(-99%);

  &:after {
    content: "";
    display: block;
    background: #fff;
    width: 100%;
    height: 20px;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 16px 16px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Item = styled(Card)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

export const Icon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 8px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ItemText = styled.div`
  font-size: 16px;
`;

export const WavesBottomContainer = styled.div`
  width: 100%;
  transform: rotate(180deg);
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
  margin-bottom: 32px;
`;
