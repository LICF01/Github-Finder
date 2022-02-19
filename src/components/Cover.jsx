import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { GrClose } from "react-icons/gr";

import SearchUser from "./user/SearchUser";

export default function Cover({ onClose, isOpen }) {
  const handleClose = () => {
    onClose();
  };

  const bgColor = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("white", "white");

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display={"flex"} justifyContent="end">
            <Icon
              as={GrClose}
              w={5}
              h={5}
              mr={2}
              onClick={handleClose}
              color={color}
            />
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            h="100%"
          >
            <SearchUser closeCover={handleClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
