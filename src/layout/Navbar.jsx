import {
  Icon,
  Grid,
  GridItem,
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../components/Logo";
import SearchUser from "../components/user/SearchUser";
import Cover from "../components/Cover";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Navbar = (props) => {
  const location = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleCover = () => {
    onOpen();
  };

  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "1fr 1fr" }}
        alignItems="center"
        px={{ base: 5, lg: 10 }}
        py={{ base: "20px" }}
        backgroundColor={bgColor}
        position="fixed"
        w="100%"
        zIndex={"999"}
      >
        <GridItem>
          <Link to={"/"}>
            <Icon as={Logo} />
          </Link>
        </GridItem>
        <GridItem justifySelf="end">
          <HStack spacing={{ base: 5, lg: 3 }}>
            <Icon as={FiSearch} w={5} h={5} mr={2} onClick={toggleCover} />
            {colorMode === "light" ? (
              <Button onClick={toggleColorMode} variant="ghost">
                {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            ) : (
              <Button onClick={toggleColorMode} variant="ghost">
                {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            )}
            <Link to={"/about"}>
              <Button variant={"ghost"}>About</Button>
            </Link>
          </HStack>
        </GridItem>
      </Grid>
      <Cover onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
