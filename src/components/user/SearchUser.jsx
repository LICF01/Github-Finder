import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchUsers } from "../../context/GithubActions";
import GithubContext from "../../context/GithubContext";

import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";

const SearchUser = () => {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(GithubContext);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = await searchUsers(inputText);

    dispatch({ type: "GET_USERS", payload: users });

    navigate(`/user/search`);

    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w={{ sm: "100%" }} my={{ base: "20px" }}>
        <InputGroup color="gray.400" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<RiSearchLine size="22" />}
          />
          <Input
            placeholder="Search..."
            id="search"
            type="text"
            value={inputText}
            onChange={handleChange}
            variant="flushed"
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default SearchUser;
