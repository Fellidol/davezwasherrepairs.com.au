import Image from "next/image";
import Section from "../Section";
import SectionInner from "../SectionInner";
import Tabs from "../Tabs";
import {
  Title,
  Map,
  MapContainer,
  ListContainer,
  List,
  ListItem,
} from "./styled";
import imgMap from "./assets/map.jpg";
import suburbs from "./assets/suburbs.json";

export default function Propaganda() {
  return (
    <Section>
      <SectionInner>
        <Title>The areas we service</Title>
        <Tabs data={data} />
      </SectionInner>
    </Section>
  );
}

const data = [
  {
    id: 0,
    label: "Map",
    content: (
      <MapContainer>
        <Map>
          <Image src={imgMap} layout="fill" alt="map of melbourne locations" />
        </Map>
      </MapContainer>
    ),
  },
  {
    id: 1,
    label: "List of suburbs",
    content: (
      <ListContainer>
        <List>
          {suburbs.data.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </ListContainer>
    ),
  },
];
