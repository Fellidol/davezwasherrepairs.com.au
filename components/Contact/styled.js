import styled from "styled-components";
import Card from "../Card";
import Section from "../Section";

export const SectionContact = styled(Section)`
  aspect-ratio: 1/1;
  @media (min-width: 768px) {
    aspect-ratio: 4/3;
  }
  @media (min-width: 992px) {
    aspect-ratio: 16/9;
  }
`;

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

export const CardContact = styled(Card)`
  width: auto;
  padding: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
