import Image from "@chakra-ui/react";
import bgImages from "../assets/BackgroundImageList";

const BackgroundImage = () => {
  return <Image src={`${bgImages[0]}`} alt="bgimage" />;
};

export default BackgroundImage;
