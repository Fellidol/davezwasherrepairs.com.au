import { useState } from "react";
import Image from "next/legacy/image";
import { NavBar, Menu, MenuItems, MenuItem, MenuButton, Logo } from "./styled";
import MenuIcon from "../MenuIcon";
import fellidol from "../../images/fellidol.png";

const Navigation = () => {
  const [menuIsActive, setmMenuIsActive] = useState(false);

  function handleClick(target) {
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
    });
    setmMenuIsActive(false);
  }

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
        {/* <Logo>
          <Image
            src={fellidol}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="fellidol logo"
          />
        </Logo> */}
      </NavBar>
      <Menu active={menuIsActive}>
        <MenuItems active={menuIsActive}>
          <MenuItem
            onClick={() => {
              handleClick("about");
            }}
          >
            About us
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("brands");
            }}
          >
            Brands we service
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("suburbs");
            }}
          >
            Suburbs we service
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("contact");
            }}
          >
            Contact us
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default Navigation;
