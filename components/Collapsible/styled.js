import styled from "styled-components";

export const CollapsibleLabel = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
`;

export const CollapsibleLabelArrow = styled.img`
  display: block;
  transform: ${(props) => (props.active ? "rotate(-180deg)" : "none")};
  width: 1.5em;
  transition: transform 300ms ease;
`;

export const CollapsibleContent = styled.div`
  height: ${(props) => (props.active ? `${props.contentHeight}px` : 0)};
  overflow: hidden;
  transition: height 300ms ease;
`;
