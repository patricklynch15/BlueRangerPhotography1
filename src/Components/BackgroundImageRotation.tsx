import { Image } from "@chakra-ui/react";
import { bgImages } from "../assets/BackgroundImageList";
import { ReactNode } from "react";

interface props {
  img: string;
  children: ReactNode;
}

const BackGroundImage = ({ img }: props) => {
  let random = (Math.random() * 100) % bgImages.length;
  setInterval(() => {
    img = bgImages[random];
  }, 5000);

  return <Image src={`${img}`} opacity={"75%"} />;
};

export default BackGroundImage;
