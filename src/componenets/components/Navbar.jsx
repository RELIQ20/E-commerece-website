import {Button,Container,Flex,HStack,Text, useColorMode} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Container
        maxW={"1140px"}
        px={4}>

        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}>

          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text">

            <Link to={"/"}>Shop</Link>
          
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <CgAddR fontSize={20} />
              </Button>
            </Link>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdDarkMode/> : <MdLightMode/>}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
