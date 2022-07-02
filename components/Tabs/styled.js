import styled from "styled-components";

export const TabLabels = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TabLabel = styled.li`
  padding: 16px 24px;
`;

export const TabLink = styled.a`
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
