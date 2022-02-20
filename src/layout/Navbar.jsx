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

import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";

const Navbar = (props) => {
  const location = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleCover = () => {
    onOpen();
  };

  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("white", "gray.900");

  const hoverIcon = {
    bgColor: "transparent",
    color: "red.400",
    cursor: "pointer",
  };

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "1fr 1fr" }}
        alignItems="center"
        px={{ base: 5, lg: 10 }}
        py={{ base: "10px" }}
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
            <Icon
              as={FiSearch}
              w={5}
              h={5}
              mr={2}
              onClick={toggleCover}
              transition={"all ease .5s"}
              _hover={{ ...hoverIcon }}
            />
            {colorMode === "light" ? (
              <Icon
                as={FiMoon}
                w={5}
                h={5}
                mr={2}
                onClick={toggleColorMode}
                transition={"all ease .5s"}
                _hover={{ ...hoverIcon }}
              />
            ) : (
              <Icon
                as={FiSun}
                w={5}
                h={5}
                mr={2}
                onClick={toggleColorMode}
                transition={"all ease .5s"}
                _hover={{ ...hoverIcon }}
              />
            )}
            <Link to={"/about"}>
              <Button
                variant={"outline"}
                border={"none"}
                transition={"all ease .5s"}
                _hover={{ ...hoverIcon }}
              >
                ABOUT
              </Button>
            </Link>
          </HStack>
        </GridItem>
      </Grid>
      <Cover onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
