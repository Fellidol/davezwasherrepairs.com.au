import Image from "next/legacy/image";
import Section from "../Section";
import SectionInner from "../SectionInner";
import ButtonCall from "../ButtonCall/ButtonCall";
import {
  SectionContact,
  CardContainer,
  CardContact,
  ImageContainer,
} from "./styled";
import backgroundImage from "./assets/kitten.jpg";

export default function Contact() {
  return (
    <SectionContact>
      <SectionInner>
        <CardContainer>
          <CardContact>
            <p>
              For fast &amp; reliable <br />
              washing machine repair
            </p>
            <h3>Call David today!</h3>
            <ButtonCall />
          </CardContact>
        </CardContainer>
      </SectionInner>
      <ImageContainer>
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="kitten asleep in washing machine"
        />
      </ImageContainer>
    </SectionContact>
  );
}
