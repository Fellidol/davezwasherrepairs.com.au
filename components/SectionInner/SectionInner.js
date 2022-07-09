import styled, { css } from "styled-components";

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

  ${(props) =>
    props.gradient &&
    css`
      padding: 32px 16px;
      background-color: #fff;
      background: linear-gradient(to bottom, #fff 0%, #dedede 100%);
      border-radius: 10px;
      margin: 16px auto;

      @media (min-width: 992px) {
        padding: 60px 32px;
        margin: 32px auto;
      }
    `}
`;
