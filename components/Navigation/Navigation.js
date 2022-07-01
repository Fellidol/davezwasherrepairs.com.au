import { useState } from "react";
import Image from "next/image";
import { NavBar, Menu, MenuItems, MenuItem, MenuButton, Logo } from "./styled";
import MenuIcon from "../MenuIcon";
import fellidol from "../../images/fellidol.png";

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
        <Logo>
          <Image
            src={fellidol}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="fellidol logo"
          />
        </Logo>
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
