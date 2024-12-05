import Image from "next/legacy/image";
import {
  Outer,
  TitleContainer,
  Title,
  Heading,
  SubHeading,
  Contact,
  CallText,
  HeroImage,
} from "./styled";
import ButtonCall from "../ButtonCall";
import heroImg from "./images/hero.png";

export default function Intro() {
  return (
    <Outer>
      <TitleContainer>
        <Title>
          <Heading>Davez Washer &amp; Dryer Repairs</Heading>
          <SubHeading>Fast &amp; Reliable washing machine Repair</SubHeading>
        </Title>
        <Contact>
          <CallText>Call David on</CallText>
          <ButtonCall />
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
    </Outer>
  );
}
