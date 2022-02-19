import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import UserItem from "./UserCard";
import NotFound from "../../pages/NotFound";
import { Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";
import PuffLoader from "react-spinners/PuffLoader";

//Framer Motion components
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

// Framer Motion Variants
const gridItemVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, delayChildren: 0.3, staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
  },
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

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  const bgColor = useColorModeValue("#f8f8f8", "gray.800");
  const spinner = useColorModeValue("black", "white");

  if (!loading) {
    return (
      <MotionGrid
        gridTemplateColumns={{
          base: "repeat(auto-fill, 80vw)",
          sm: "repeat(auto-fill, 40vw)",
          lg: "repeat(auto-fill, 30vw)",
          xl: "repeat(auto-fill, 25vw)",
        }}
        gap={10}
        pt={20}
        justifyContent="center"
        alignItems={"center"}
        backgroundColor={bgColor}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
      >
        {users.map((user) => {
          return (
            <MotionGridItem
              key={user.id}
              variants={gridItemVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <UserItem user={user} />
            </MotionGridItem>
          );
        })}
      </MotionGrid>
    );
  } else {
    return (
      <Flex justifyContent="center" align="center" h="80vh">
        <PuffLoader size={80} color={spinner} />
      </Flex>
    );
  }
};

export default UserResults;
