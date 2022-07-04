import styled from "styled-components";

export const Outer = styled.div`
  position: relative;
  background-color: #fff;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 992px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 16px;
  padding-bottom: 0;
`;

export const TextContainer = styled.div`
  padding: 16px;
  p {
    margin: 0;
  }
  a {
    color: #000;
  }
`;
