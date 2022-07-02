import { useState } from "react";
import { TabLabels, TabLabel, TabLink } from "./styled";

export default function Tabs(props) {
  const [active, setActive] = useState(0);

  return (
    <>
      <TabLabels>
        {props.data.map((item) => (
          <TabLabel
            key={item.id}
            onClick={() => {
              setActive(item.id);
            }}
          >
            <TabLink active={item.id === active}>{item.label}</TabLink>
          </TabLabel>
        ))}
      </TabLabels>
      <div>
        {props.data.map((item) => {
          if (item.id === active)
            return <div key={item.id}>{item.content}</div>;
        })}
      </div>
    </>
  );
}
