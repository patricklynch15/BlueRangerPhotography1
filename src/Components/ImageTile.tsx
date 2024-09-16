import { Image } from "@chakra-ui/react";
import img1 from "../Images/SNY07330.jpeg";

const ImageTile = () => {
  return (
    <Image
      key={`${img1}`}
      src={`${img1}`}
      alt="Noah"
      objectFit={"contain"}
      boxSize={"100%"}
    />
  );
};

export default ImageTile;
