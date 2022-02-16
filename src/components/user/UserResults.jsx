import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import UserItem from "./UserCard";
import { Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";
import PuffLoader from "react-spinners/PuffLoader";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  const bgColor = useColorModeValue("#f8f8f8", "gray.800");

  if (!loading) {
    return (
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fill, 80vw)",
          sm: "repeat(auto-fill, 40vw)",
          lg: "repeat(auto-fill, 30vw)",
          xl: "repeat(auto-fill, 25vw)",
        }}
        gap={10}
        my={10}
        justifyContent="center"
        alignItems={"center"}
        backgroundColor={bgColor}
      >
        {users.map((user) => {
          return (
            <GridItem key={user.id}>
              <UserItem user={user} />
            </GridItem>
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Flex justifyContent="center" align="center" h="80vh">
        <PuffLoader size={80} />
      </Flex>
    );
  }
};

export default UserResults;
