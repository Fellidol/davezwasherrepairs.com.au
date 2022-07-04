import styled from "styled-components";

export const Outer = styled.div`
  position: relative;
  background-color: #fff;

  position: relative;
  aspect-ratio: 1/1;

  @media (min-width: 600px) {
    aspect-ratio: 16/9;
  }

  @media (min-width: 992px) {
    aspect-ratio: 16/9;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 992px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
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
