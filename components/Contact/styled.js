import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 16px;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 10%);
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
