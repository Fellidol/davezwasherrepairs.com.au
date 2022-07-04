import Text from "../Text";
import { Outer, Inner, Title, TextContainer } from "./styled";

export default function Footer() {
  return (
    <Outer>
      <Inner>
        <Title>We accept Cash, Cheque or Electronic Transfer</Title>
        <TextContainer>
          <p>
            © Copyright 2022 - Davez Washer &amp; Dryer Repairs - Call Dave on{" "}
            <a href="tel:0452 234 752">0452 234 752</a> - Melbourne
          </p>
        </TextContainer>
      </Inner>
    </Outer>
  );
}
