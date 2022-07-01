import styled from "styled-components";

export const Outer = styled.div`
  position: relative;
  background-color: #fff;
`;

export const Inner = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 16px 16px;
  padding: 16px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: #efefef;
  border-radius: 10px;
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
