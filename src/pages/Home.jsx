import React from "react";

import { Heading, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import SearchUser from "../components/user/SearchUser";

import { FaGithub } from "react-icons/fa";

function Home() {
  const bgColor = useColorModeValue("#f8f8f8", "gray.800");

  return (
    <Flex
      flexDirection={"column"}
      justify="center"
      align="center"
      bgColor={bgColor}
      h={"100%"}
      pb={"200px"}
    >
      <Icon as={FaGithub} w={"200px"} h={"200px"} mr={2} />
      <Heading m="12">Type below to find an user</Heading>
      <SearchUser />
    </Flex>
  );
}

export default Home;
