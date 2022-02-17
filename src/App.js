import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { GithubProvider } from "./context/GithubContext";

import { Box } from "@chakra-ui/react";

import Home from "./pages/Home";
import UserResults from "./components/user/UserResults";
import User from "./pages/User";
import About from "./pages/About";

function App() {
  return (
    <GithubProvider>
      <Box h={"100%"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="/user/search" element={<UserResults />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </GithubProvider>
  );
}

export default App;
