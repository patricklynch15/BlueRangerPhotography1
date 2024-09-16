import { Box } from "@chakra-ui/react";
import img1 from "../Images/SNY07330.jpeg";

import { ReactNode } from "react";

interface props {
  children?: ReactNode;
}

const GalleryPhoto = () => {
  return <Box bgImage={img1}></Box>;
};

export default GalleryPhoto;
