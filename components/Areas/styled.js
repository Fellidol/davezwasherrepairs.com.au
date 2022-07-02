import styled from "styled-components";

export const Outer = styled.div`
  position: relative;
  background-color: #fff;
`;

export const Inner = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 16px;
`;

export const MapContainer = styled.div`
  padding: 16px;
`;

export const Map = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 10px;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  padding: 16px;
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
