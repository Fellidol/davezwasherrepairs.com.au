import styled from "styled-components";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";
import Card from "../components/Card";
import Collapsible from "../components/Collapsible";
import Tabs from "../components/Tabs";

export default function Components() {
  return (
    <PageContainer>
      <hr />
      <p>Typography</p>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Text>Paragraph</Text>

      <hr />
      <p>Card</p>
      <CardContainer>
        <Card />
      </CardContainer>

      <hr />
      <p>Collapsible</p>
      <Collapsible label="collapsible">Collapsible content</Collapsible>

      <hr />
      <p>Tabs</p>
      <Tabs
        data={[
          {
            id: 0,
            label: "One",
            content: <>Content 1</>,
          },
          {
            id: 1,
            label: "Two",
            content: <>Content 2</>,
          },
        ]}
      />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding: 30px;
`;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
`;
