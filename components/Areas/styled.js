import styled from "styled-components";
import Heading2 from "../Heading2";
import Card from "../Card";

export const Title = styled(Heading2)`
  margin-top: 0;
  text-align: center;
`;

export const TabContent = styled(Card)`
  padding: 16px;
`;

export const Map = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 10px;
  overflow: hidden;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 600px) {
    column-count: 2;
  }

  @media (min-width: 768px) {
    column-count: 3;
  }
`;

export const ListItem = styled.li`
  line-height: 1.5;
`;
