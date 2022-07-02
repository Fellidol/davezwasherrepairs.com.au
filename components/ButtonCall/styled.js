import styled from "styled-components";
import Text from "../Text";

export const Button = styled.a`
  white-space: nowrap;
  background-color: #008cba;
  border-radius: 5px;
  padding: 16px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media (min-width: 992px) {
    font-size: 1.5rem;
    padding: 6px 20px;
  }
`;

export const ButtonIcon = styled.span`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media (min-width: 992px) {
    width: 25px;
    height: 25px;
  }
`;

export const ButtonText = styled(Text)`
  display: block;
  margin: 0;
  color: #fff;
  text-shadow: none;
`;
