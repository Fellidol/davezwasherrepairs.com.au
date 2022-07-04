import styled from "styled-components";

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

export const Item = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 10%);
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
