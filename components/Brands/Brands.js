import Image from "next/image";
import { Outer, Inner, Title, Items, Item } from "./styled";
import logoArtisan from "./images/01-artiston.gif";
import logoSimpson from "./images/02-simpson.gif";
import logoWhirlpool from "./images/03-whirlpool.gif";
import logoWestinghouse from "./images/04-westinghouse.gif";
import logoSpeedQueen from "./images/05-speed-queen.gif";
import logoSamsung from "./images/07-samsung.gif";
import logofisher from "./images/08-fischer.gif";
import logoKleenmain from "./images/10-kleenmaid.gif";
import logoHoover from "./images/11-hoover.gif";
import logoBosch from "./images/12-bosch.gif";
import logoElectrolux from "./images/13-electrolux.gif";

export default function Propaganda() {
  return (
    <Outer>
      <Inner>
        <Title>Brands we service</Title>
        <Items>
          {logoArray.map((item) => (
            <Item key={item.alt}>
              <Image src={item.logo} alt={item.alt} />
            </Item>
          ))}
        </Items>
      </Inner>
    </Outer>
  );
}

const logoArray = [
  { logo: logoArtisan, alt: "Artiston" },
  { logo: logoSimpson, alt: "Simpson" },
  { logo: logoWhirlpool, alt: "Whirlpool" },
  { logo: logoWestinghouse, alt: "Westinghouse" },
  { logo: logoSpeedQueen, alt: "Speed Queen" },
  { logo: logoSamsung, alt: "Samsung" },
  { logo: logofisher, alt: "Fischer" },
  { logo: logoKleenmain, alt: "Kleenmaid" },
  { logo: logoHoover, alt: "Hoover" },
  { logo: logoBosch, alt: "Bosch" },
  { logo: logoElectrolux, alt: "Electrolux" },
];