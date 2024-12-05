import styled from "styled-components";
import Heading2 from "../Heading2";
import Card from "../Card";

export const Title = styled(Heading2)`
  margin-top: 0;
  text-align: center;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 16px 16px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Item = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
