import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchUsers } from "../../context/GithubActions";
import GithubContext from "../../context/GithubContext";

import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";
import UserNotFound from "./UserNotFound";

const SearchUser = ({ closeCover }) => {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(GithubContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = await searchUsers(inputText);

    dispatch({ type: "GET_USERS", payload: users });

    setInputText("");

    if (closeCover) {
      closeCover();
    }

    console.log(users);

    if (users.length === 0) toggleModal();
    if (users.length === 1) navigate(`/user/${users[0].login}`);
    if (users.length > 1) navigate(`/user/search`);
  };

  const toggleModal = () => {
    onOpen();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl w={{ sm: "100%" }}>
          <InputGroup color="gray.400" size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<RiSearchLine size="22" />}
            />
            <Input
              placeholder="Type an user name"
              id="search"
              type="text"
              value={inputText}
              onChange={handleChange}
              variant="flushed"
            />
          </InputGroup>
        </FormControl>
      </form>
      <UserNotFound onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default SearchUser;
