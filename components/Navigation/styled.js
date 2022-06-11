import styled, { css } from "styled-components";
import Text from "../Text";

const menuHeight = "60px";
const bgColor = "rgba(43, 43, 43, 0.98)";

export const NavBar = styled.div`
  position: relative;
  background-color: ${bgColor};
  position: fixed;
  top: 0;
  z-index: 99;
  height: ${menuHeight};
  width: 100%;
`;

export const MenuButton = styled.button`
  border: none;
  outline: none;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: transparent;
`;

export const Menu = styled.div.attrs((props) => {
  return {
    style: { transform: `translateX(${props.active ? "100%" : "0"})` },
  };
})`
  position: fixed;
  top: ${menuHeight};
  left: -100%;
  z-index: 98;
  width: 100%;
  height: calc(100% - ${menuHeight});
  background-color: ${bgColor};
  transition: all 300ms ease-out;
`;

export const MenuItem = styled(Text)`
  color: #fff;
  padding: 16px;
  margin: 0;
  opacity: 0;
  transform: translateX(-500px);
  transition: all 300ms ease-in;
`;

export const MenuItems = styled.div`
  width: 100%;
  height: calc(100% - ${menuHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in;

  ${(props) =>
    props.active &&
    css`
      ${MenuItem} {
        opacity: 1;
        transform: translateX(0);
      }

      ${MenuItem}:nth-child(1) {
        transition: all 500ms ease-out;
      }
      ${MenuItem}:nth-child(2) {
        transition: all 600ms ease-out;
      }
      ${MenuItem}:nth-child(3) {
        transition: all 700ms ease-out;
      }
      ${MenuItem}:nth-child(4) {
        transition: all 800ms ease-out;
      }
    `}
`;
