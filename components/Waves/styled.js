import styled, { keyframes } from "styled-components";

const moveForever = keyframes` {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}`;

export const Outer = styled.div`
  width: 100%;
  max-height: 200px;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 200px;
  }

  g > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  g > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  g > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  g > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  g > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;
