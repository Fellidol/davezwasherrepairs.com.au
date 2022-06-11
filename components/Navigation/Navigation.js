import { useState } from "react";
import { NavBar, Menu, MenuItems, MenuItem, MenuButton } from "./styled";
import MenuIcon from "../MenuIcon";

const Navigation = () => {
  const [menuIsActive, setmMenuIsActive] = useState(false);

  return (
    <>
      <NavBar>
        <MenuButton
          onClick={() => {
            setmMenuIsActive(!menuIsActive);
          }}
        >
          <MenuIcon active={menuIsActive} />
        </MenuButton>
      </NavBar>
      <Menu active={menuIsActive}>
        <MenuItems active={menuIsActive}>
          <MenuItem>About us</MenuItem>
          <MenuItem>Brands we service</MenuItem>
          <MenuItem>Suburbs we service</MenuItem>
          <MenuItem>Contact us</MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default Navigation;
