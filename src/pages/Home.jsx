import React from "react";
import { motion } from "framer-motion";

import { Heading, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import SearchUser from "../components/user/SearchUser";

import { FaGithub } from "react-icons/fa";

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

function Home() {
  const bgColor = useColorModeValue("#f8f8f8", "gray.800");

  return (
    <MotionFlex
      flexDirection={"column"}
      justify="center"
      align="center"
      bgColor={bgColor}
      h={"100%"}
      pb={"200px"}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Icon as={FaGithub} w={"200px"} h={"200px"} m={12} />
      <SearchUser />
    </MotionFlex>
  );
}

export default Home;
