import React from "react";
import { Link } from "@chakra-ui/react";
import { Heading, Flex, useColorModeValue, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Framer Motion Variants
const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const MotionFlex = motion(Flex);

function About() {
  const bgColor = useColorModeValue("#f8f8f8", "gray.800");

  return (
    <MotionFlex
      flexDirection={"column"}
      justify="center"
      align="center"
      bgColor={bgColor}
      h={"100%"}
      textAlign="center"
      px={10}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
    </MotionFlex>
  );
}

export default About;
