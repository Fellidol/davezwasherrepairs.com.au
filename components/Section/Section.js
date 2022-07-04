import styled from "styled-components";

export default function Component(props) {
  return <Section {...props}>{props.children}</Section>;
}

const Section = styled.section`
  position: relative;
  background-color: #fff;
  background: linear-gradient(to bottom, #fff 0%, #dedede 100%);
`;
