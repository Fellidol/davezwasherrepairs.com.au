import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;

  /* https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjU3NnB4IiwibWF4V2lkdGgiOiI5OTJweCIsIm1pbkZvbnRTaXplIjoiMzRweCIsIm1heEZvbnRTaXplIjoiNDhweCJ9 */
  font-size: clamp(2.125rem, 0.9135rem + 3.3654vw, 3rem);
  /* 34 > 48 */
`;
