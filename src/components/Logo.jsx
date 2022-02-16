import { Icon, Heading, HStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Logo = () => {
  return (
    <HStack>
      <Icon as={FaGithub} w={{ base: 10, lg: 10 }} h={10} mr={2} />
      <Heading fontSize={30} display={{ base: "none", lg: "block" }}>
        GithubFinder
      </Heading>
    </HStack>
  );
};

export default Logo;
