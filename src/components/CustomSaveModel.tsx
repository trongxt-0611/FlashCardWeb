import React, { useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  UseDisclosureProps,
  Text,
  Button,
  Kbd,
  useClipboard,
  VStack,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

interface ICustomSaveModel {
  modalSave: UseDisclosureProps;
  idCard?: string;
}

const CustomSaveModel = ({ modalSave, idCard }: ICustomSaveModel) => {
  const { onCopy, setValue, hasCopied } = useClipboard("");
  const navigate = useNavigate();

  useEffect(() => {
    if (idCard) setValue(idCard);
  }, [idCard]);

  return (
    <Modal onClose={modalSave.onClose!} isOpen={modalSave.isOpen!} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="primary.400">Hurray 🥳🥳🥳</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap={4}>
            <Text>
              We have create a list card for you! Click link below for starting
              study 😃
            </Text>
            <Kbd px={2} py={3} display={"block"} mt={4} w={"full"}>
              <HStack>
                <Text isTruncated={true}>{idCard}</Text>
                <Button onClick={onCopy}>
                  {hasCopied ? <CheckIcon /> : <CopyIcon />}{" "}
                </Button>
              </HStack>
            </Kbd>
          </VStack>
          <Center mt={4}>
            <QRCode value={idCard || ""} />
          </Center>
        </ModalBody>
        <ModalFooter>
          <Flex w={"full"} gap={4}>
            <Button
              colorScheme="primary"
              variant={"outline"}
              onClick={modalSave.onClose}
              flexBasis="50%"
            >
              Close
            </Button>
            <Button
              colorScheme="primary"
              flexBasis="50%"
              onClick={() =>
                navigate(
                  `/sharing/card/${idCard?.toString().split("/").slice(-1)}`,
                  { replace: true }
                )
              }
            >
              Review Cards
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomSaveModel;
