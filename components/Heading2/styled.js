import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;

  /* https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjU3NnB4IiwibWF4V2lkdGgiOiI5OTJweCIsIm1pbkZvbnRTaXplIjoiMjRweCIsIm1heEZvbnRTaXplIjoiMzZweCJ9 */
  font-size: clamp(1.5rem, 0.4615rem + 2.8846vw, 2.25rem);
  /* 24 > 36 */
`;
