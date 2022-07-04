import Image from "next/image";
import ButtonCall from "../ButtonCall/ButtonCall";
import { Outer, Inner, CardContainer, Card, ImageContainer } from "./styled";
import backgroundImage from "./assets/kitten.jpg";

export default function Contact() {
  return (
    <Outer>
      <Inner>
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
      </Inner>
      <ImageContainer>
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="kitten asleep in washing machine"
        />
      </ImageContainer>
    </Outer>
  );
}
