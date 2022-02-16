import {
  Flex,
  VStack,
  Image,
  Text,
  Button,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaBuilding, FaMapMarker, FaLink, FaUserFriends } from "react-icons/fa";

const UserInfo = ({ user }) => {
  const {
    name,
    avatar_url,
    login,
    bio,
    location,
    company,
    blog,
    followers,
    following,
  } = user;

  const bioTextColor = useColorModeValue("gray.600", "gray.400");

  const textColor3 = useColorModeValue("gray.400", "gray.600");

  return (
    <Flex
      flexDirection={{ base: "column" }}
      alignItems={{ base: "center", lg: "start" }}
      align="start"
      maxW={{ base: "80vw", lg: "18vw" }}
      textAlign={{ base: "center", lg: "start" }}
    >
      <Image
        src={avatar_url}
        alt="Dan Abramov"
        boxSize="200px"
        borderRadius="md"
      />
      <VStack spacing="-1" spacing={1} my={2}>
        <Text fontWeight="900" fontSize="4xl">
          {name}
        </Text>
        <Text
          fontSize="3xl"
          color={textColor3}
          fontWeight="500"
        >{`@${login}`}</Text>
      </VStack>
      <Text color={bioTextColor} fontWeight="medium" my={2}>
        {bio}
      </Text>
      <Link href={`https://github.com/${login}`} isExternal w="full" my={2}>
        <Button
          bgColor="black"
          color="white"
          w={{ base: "100%", sm: "sm", md: "md", lg: "full" }}
          h="70px"
          _hover={{ bgColor: "#2b2b2b" }}
          _active={{
            border: "none",
            outline: "none",
            color: "#000",
            bgColor: "#ececec",
          }}
          _visited={{
            border: "none",
            outline: "none",
          }}
        >
          Visit Profile
        </Button>
      </Link>
      <VStack color={textColor3} align="start" my={2}>
        <HStack>
          <FaUserFriends />
          <Text>
            Followers: {followers} / Following: {following}
          </Text>
        </HStack>
        <HStack>
          <FaBuilding />
          <Text>{company}</Text>
        </HStack>
        <HStack>
          <FaMapMarker />
          <Text>{location}</Text>
        </HStack>
        <HStack>
          <FaLink />
          <Text>{blog}</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default UserInfo;
