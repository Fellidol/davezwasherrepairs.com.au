import Image from "next/image";
import Section from "../Section";
import SectionInner from "../SectionInner";
import ButtonCall from "../ButtonCall/ButtonCall";
import { Outer, Inner, CardContainer, Card, ImageContainer } from "./styled";
import backgroundImage from "./assets/kitten.jpg";

export default function Contact() {
  return (
    <Section>
      <SectionInner>
        <CardContainer>
          <Card>
            <p>
              For fast &amp; reliable <br />
              washing machine repair
            </p>
            <h3>Call David today!</h3>
            <ButtonCall />
          </Card>
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
    </Section>
  );
}
