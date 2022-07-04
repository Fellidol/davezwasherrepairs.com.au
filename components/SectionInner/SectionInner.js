import styled from "styled-components";

export default function Component(props) {
  return <SectionInner {...props}>{props.children}</SectionInner>;
}

const SectionInner = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 30px 16px;

  @media (min-width: 992px) {
    padding: 60px 0;
  }
`;
