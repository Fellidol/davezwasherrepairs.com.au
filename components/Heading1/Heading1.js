import { H1 } from "./styled";

export default function Heading1(props) {
  return <H1 {...props}>{props.children}</H1>;
}
