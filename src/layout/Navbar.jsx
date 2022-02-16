import {
  Icon,
  Grid,
  GridItem,
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "../components/Logo";
import SearchUser from "../components/user/SearchUser";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Grid
      templateColumns={{ base: "1fr 1fr 1fr", md: "1fr 2.5fr 1fr" }}
      alignItems="center"
      px={{ base: 5, lg: 10 }}
      pt={{ base: 3, lg: 0 }}
      backgroundColor={bgColor}
    >
      <GridItem colSpan={1}>
        <Icon as={Logo} />
      </GridItem>
      <GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 3, md: 1 }}>
        <SearchUser />
      </GridItem>
      <GridItem
        justifySelf="end"
        order={{ base: 1, md: 2 }}
        colSpan={{ base: 2, md: 1 }}
      >
        <HStack spacing={{ base: 5, lg: 50 }}>
          {colorMode === "light" ? (
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          ) : (
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          )}
          <p>About</p>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
