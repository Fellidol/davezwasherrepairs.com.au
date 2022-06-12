import Image from "next/image";
import {
  Outer,
  TitleContainer,
  Title,
  Heading,
  SubHeading,
  Contact,
  CallText,
  Button,
  ButtonIcon,
  ButtonText,
  HeroImage,
  Offer,
} from "./styled";
import Waves from "../Waves";
import phoneIcon from "../../images/211830_telephone_icon.svg";
import heroImg from "../../images/hero.png";

const Header = () => {
  return (
    <Outer>
      <TitleContainer>
        <Title>
          <Heading>Davez Washer &amp; Dryer Repairs</Heading>
          <SubHeading>Fast &amp; Reliable washing machine Repair</SubHeading>
        </Title>
        <Contact>
          <CallText>Call David on</CallText>
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
        </Contact>
      </TitleContainer>
      <HeroImage>
        <Image
          src={heroImg}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt="Front Loaders, Top Loaders, Dryers"
          priority
        />
      </HeroImage>
      <Offer>
        Mention this website and receive <strong>$10 off</strong> your repairs.
      </Offer>
    </Outer>
  );
};

export default Header;
