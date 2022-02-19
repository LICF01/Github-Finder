import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function UserNotFound({ onClose, isOpen }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>User Not Found!</ModalHeader>
        <ModalCloseButton />
        <ModalBody color="gray.500" mb={10}>
          Sorry, the user has not be found, have you spell it correctly?
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
