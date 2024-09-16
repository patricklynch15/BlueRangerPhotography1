import { Image } from "@chakra-ui/react";
import def, { bgImageList } from "../assets/BackgroundImageList";
import { ReactNode } from "react";

interface props {
  img: string;
  children: ReactNode;
}

const BackGroundImage = ({ img }: props) => {
  let idx = 0;

  idx = (idx + 1) % bgImageList.length;
  setInterval(() => {
    img = bgImageList[idx];
  }, 5000);

  return <Image src={img} />;
};

export default BackGroundImage;
