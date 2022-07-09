import styled from "styled-components";

export default function Component(props) {
  return <Section {...props}>{props.children}</Section>;
}

const Section = styled.section`
  position: relative;
`;
