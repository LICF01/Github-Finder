import { useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";

const SearchRepo = ({ repos, getRepo }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const repo = repos.filter((repo) =>
      repo.name.toLowerCase().startsWith(inputText.toLowerCase())
    );

    getRepo(repo);

    setInputText("");
  };

  return (
    <Box alignSelf={{ base: "start", md: "end" }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl
          w={{ base: "100%" }}
          mb={{ base: "20px" }}
          mt={{ base: "20px", lg: 0 }}
        >
          <Flex justifyContent={{ base: "start", md: "end" }}>
            <InputGroup
              color="gray.400"
              size="lg"
              w={{ base: "100%", m: "30%" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<RiSearchLine size="22" />}
              />
              <Input
                placeholder="Search a project"
                id="search"
                type="text"
                value={inputText}
                onChange={handleChange}
                variant="flushed"
              />
            </InputGroup>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchRepo;
