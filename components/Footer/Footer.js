import { Outer, Inner, Title, TextContainer } from "./styled";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Outer>
      <Inner>
        <Title>We accept Cash, Cheque or Electronic Transfer</Title>
        <TextContainer>
          <p>
            © Copyright {year} - Davez Washer &amp; Dryer Repairs - Call Dave on{" "}
            <a href="tel:0452 234 752">0452 234 752</a> - Melbourne
          </p>
        </TextContainer>
      </Inner>
    </Outer>
  );
}
