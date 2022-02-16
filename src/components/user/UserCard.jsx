import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  console.log(user);
  const { login, avatar_url } = user;

  const bgColor = useColorModeValue("white", "gray.900");
  const shadow = useColorModeValue(
    "rgba(0,0,0,0.17)",
    "rgba(113, 128, 150, 0.17)"
  );

  return (
    <Link to={`/user/${login}`}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        bgColor={bgColor}
        borderRadius="md"
        overflow="hidden"
        h="100%"
        p="6"
        transition="all .2s"
        _hover={{
          boxShadow: `4px 15px 16px -2px ${shadow}`,
          transform: "translateY(-10px)",
        }}
        sx={{ cursor: "pointer" }}
      >
        <Box>
          <Image
            src={avatar_url}
            alt={`${login} profile picture`}
            rounded="lg"
            boxSize="100px"
            minW="50px"
          ></Image>
        </Box>
        <Box pl={{ md: 5 }} textAlign={{ base: "center", md: "start" }}>
          <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
            {login}
          </Text>
          <Text mt={1} color="gray.500">
            Visit Profile
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default UserItem;
