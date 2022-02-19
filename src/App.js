import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./layout/Navbar";
import { GithubProvider } from "./context/GithubContext";

import { Box } from "@chakra-ui/react";

import Home from "./pages/Home";
import UserResults from "./components/user/UserResults";
import User from "./pages/User";
import About from "./pages/About";

function App() {
  const location = useLocation();
  return (
    <GithubProvider>
      <Navbar />
      <Box h={"100%"} pt={"70px"}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/user/search" element={<UserResults />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Box>
    </GithubProvider>
  );
}

export default App;
