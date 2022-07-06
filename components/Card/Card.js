import styled from "styled-components";

export default function Component(props) {
  return <Card {...props}>{props.children}</Card>;
}

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 10%);
`;
