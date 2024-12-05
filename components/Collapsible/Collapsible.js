import { useRef, useState } from "react";
import Image from "next/legacy/image";
import {
  CollapsibleLabel,
  CollapsibleLabelArrow,
  CollapsibleContent,
} from "./styled";
import arrow from "./images/arrow.svg";

export default function Collapseable(props) {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(false);
  const contentRef = useRef();

  return (
    <>
      <CollapsibleLabel
        onClick={() => {
          setActive(!active);
          setContentHeight(contentRef.current.scrollHeight);
        }}
      >
        {props.label}
        <CollapsibleLabelArrow src={arrow.src} active={active} />
      </CollapsibleLabel>
      <CollapsibleContent
        ref={contentRef}
        active={active}
        contentHeight={contentHeight}
      >
        {props.children}
      </CollapsibleContent>
    </>
  );
}
