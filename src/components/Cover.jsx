import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";

import SearchUser from "./user/SearchUser";

export default function Cover({ onClose, isOpen }) {
  const handleClose = () => {
    onClose();
  };

  const bgColor = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgColor={bgColor}>
          <DrawerHeader display={"flex"} justifyContent="end">
            <Icon
              as={AiOutlineClose}
              w={10}
              h={10}
              mr={2}
              onClick={handleClose}
              color={color}
              transition="all ease 0.5s"
              _hover={{
                cursor: "pointer",
                color: "red.300",
              }}
            />
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            h="100%"
            mb={"200px"}
          >
            <SearchUser closeCover={handleClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
