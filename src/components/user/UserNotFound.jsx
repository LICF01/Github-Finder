import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function UserNotFound({ onClose, isOpen }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent textAlign={"center"}>
        <ModalHeader>
          <Text fontSize={"2xl"}>User Not Found!</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody color="gray.500" mb={10}>
          <Text fontSize={"lg"}>
            Sorry, the user has not be found,
            <br /> have you spell it correctly?
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
