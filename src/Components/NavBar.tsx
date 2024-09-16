import { Text, HStack } from "@chakra-ui/react";

interface props {
  menuItems: string[];
}

const NavBar = ({ menuItems }: props) => {
  return (
    <HStack opacity={"50"} justify={"space-evenly"}>
      {menuItems.map((item) => {
        return (
          <Text margin={"10px"} opacity={10} key={item}>
            {item}
          </Text>
        );
      })}
    </HStack>
  );
};

export default NavBar;
