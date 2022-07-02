import Image from "next/image";
import { Button, ButtonIcon, ButtonText } from "./styled.js";
import phoneIcon from "./assets/phone-icon.svg";
export default function ButtonCall() {
  return (
    <Button href="tel:0452234752">
      <ButtonIcon>
        <Image
          src={phoneIcon}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt="phone icon"
        />
      </ButtonIcon>
      <ButtonText>0452 234 752</ButtonText>
    </Button>
  );
}
