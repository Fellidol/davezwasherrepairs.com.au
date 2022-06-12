import styled, { css } from "styled-components";

export const Outer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
