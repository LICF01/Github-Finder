import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./layout/Navbar";
import { GithubProvider } from "./context/GithubContext";

import { Box } from "@chakra-ui/react";

import Home from "./pages/Home";
import UserResults from "./components/user/UserResults";
import User from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  return (
    <GithubProvider>
      <Navbar />
      <Box h={"100%"} pt={"50px"}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/user/search" element={<UserResults />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Box>
    </GithubProvider>
  );
}

export default App;
