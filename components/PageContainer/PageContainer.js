import Image from "next/image";
import { Outer, BackgroundImage } from "./styled";
import bgImg from "../../images/bg.jpg";

const PageContainer = (props) => {
  return (
    <Outer>
      <BackgroundImage>
        <Image
          src={bgImg}
          alt="Washing machine"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
      </BackgroundImage>
      {props.children}
    </Outer>
  );
};

export default PageContainer;
