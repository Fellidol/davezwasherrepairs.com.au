import styled from "styled-components";

export default function Text(props) {
  return <P {...props}>{props.children}</P>;
}

const P = styled.p`
  font-size: 1rem;
  /* https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjU3NnB4IiwibWF4V2lkdGgiOiIxMjAwcHgiLCJtaW5Gb250U2l6ZSI6IjE2cHgiLCJtYXhGb250U2l6ZSI6IjI0cHgifQ%3D%3D */
  font-size: clamp(1rem, 0.5385rem + 1.2821vw, 1.5rem);
  /* 16 > 24 */

  /* https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjU3NnB4IiwibWF4V2lkdGgiOiIxMjAwcHgiLCJtaW5Gb250U2l6ZSI6IjIycHgiLCJtYXhGb250U2l6ZSI6IjM4cHgifQ%3D%3D */
  line-height: clamp(1.375rem, 0.2212rem + 3.2051vw, 2.625rem);
  /* 26 > 42 */
`;
