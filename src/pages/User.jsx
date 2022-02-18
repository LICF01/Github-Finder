import { useEffect, useContext, useState } from "react";
import {
  Heading,
  Grid,
  GridItem,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GithubContext from "../context/GithubContext";
import { getUserData } from "../context/GithubActions";
import UserInfo from "../components/user/UserInfo";
import RepoItem from "../components/user/RepoCard";
import SearchRepo from "../components/SearchRepo";

import PuffLoader from "react-spinners/PuffLoader";

//Framer Motion components
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

// Framer Motion Variants
const gridItemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

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

const User = () => {
  const { user, repos, loading, dispatch } = useContext(GithubContext);
  const [repo, setRepo] = useState([]);
  let params = useParams();

  const bgColor = useColorModeValue("#f8f8f8", "gray.800");
  const spinner = useColorModeValue("black", "white");

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUser = async () => {
      const userData = await getUserData(params.login);
      dispatch({ type: "GET_USER", payload: userData });
    };

    getUser();
  }, [dispatch, params.login]);

  const getRepo = (repo) => {
    setRepo(repo);
  };

  if (loading) {
    return (
      <Flex justifyContent="center" align="center" h="80vh">
        <PuffLoader size={80} color={spinner} />
      </Flex>
    );
  }

  return (
    <MotionGrid
      templateColumns={{ lg: "1fr 3.4fr" }}
      alignItems="start"
      justifyContent={"center"}
      px={10}
      pt={20}
      bgColor={bgColor}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <GridItem m="0 auto">
        <UserInfo user={user} />
      </GridItem>
      <GridItem>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "start" }}
          mt={{ base: 10, md: 0 }}
        >
          <Heading>Projects</Heading>
          <Spacer />
          <SearchRepo repos={repos} getRepo={getRepo} w="xl" />
        </Flex>
        <MotionGrid
          gridTemplateColumns={{
            base: "repeat(auto-fill, 80vw)",
            md: "repeat(2, 1fr)",
          }}
          gap={10}
          my={10}
          layout
        >
          <AnimatePresence>
            {repo.length === 0
              ? repos.map((repo) => {
                  return (
                    <MotionGridItem
                      key={repo.id}
                      variants={gridItemVariant}
                      layout
                    >
                      <RepoItem repo={repo} />
                    </MotionGridItem>
                  );
                })
              : repo.map((repo) => {
                  return (
                    <MotionGridItem
                      key={repo.id}
                      variants={gridItemVariant}
                      layout
                    >
                      <RepoItem repo={repo} />
                    </MotionGridItem>
                  );
                })}
          </AnimatePresence>
        </MotionGrid>
      </GridItem>
    </MotionGrid>
  );
};

export default User;
