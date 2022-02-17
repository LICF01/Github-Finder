import React from "react";
import { Link } from "@chakra-ui/react";

import { Heading, Flex, useColorModeValue, Icon, Text } from "@chakra-ui/react";

import SearchUser from "../components/user/SearchUser";

import { FaGithub } from "react-icons/fa";

function About() {
  const bgColor = useColorModeValue("#f8f8f8", "gray.800");

  return (
    <Flex
      flexDirection={"column"}
      justify="center"
      align="center"
      bgColor={bgColor}
      h={"100%"}
      pb={"200px"}
      textAlign="center"
    >
      <Icon as={FaGithub} w={"200px"} h={"200px"} mr={2} />
      <Heading m="10" as={"h1"}>
        GitHub Finder
      </Heading>
      <Text color="gray.500" fontSize={"xl"}>
        A React app to search, get and display profiles info from the GitHub API
      </Text>
      <Text color="gray.500" fontSize={"xl"} mt={2}>
        The design is heavely inspired in the work of{" "}
        <Link href={`https://dribbble.com/alyssax`} isExternal color="red.500">
          Alyssa X
        </Link>{" "}
        named {""}
        <Link
          href={`https://dribbble.com/shots/6188320-Open-Source-Design-Platform`}
          isExternal
          color="red.300"
        >
          Open Source Design Platform
        </Link>
      </Text>
      <Text color="gray.500" fontSize={"xl"} mt={2}>
        Coded by{" "}
        <Link href={`https://github.com/Licf01`} isExternal color="red.500">
          Lucas Cubilla
        </Link>
      </Text>
    </Flex>
  );
}

export default About;
