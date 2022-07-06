import styled from "styled-components";

export default function Component(props) {
  return <Anchor id={props.id} offset={props.offset} />;
}

const Anchor = styled.a`
  position: relative;
  top: ${(props) => props.offset};
`;
