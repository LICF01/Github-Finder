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

function NotFound() {
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
      pb={20}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Icon as={FaGithub} w={"200px"} h={"200px"} mr={2} />
      <Heading m="10" as={"h1"}>
        404 Not found
      </Heading>
      <Text color="gray.500" fontSize={"xl"} mt={2}>
        Sorry for the inconvinience, the page you're trying to reach doesn't
        exist!
      </Text>
    </MotionFlex>
  );
}

export default NotFound;
