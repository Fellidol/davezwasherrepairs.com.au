import styled from "styled-components";
import Card from "../Card";

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
