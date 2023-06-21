import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Nav from "../components/Nav";
import WrapContainer from "../components/WrapContainer";
import { DeleteIcon } from "@chakra-ui/icons";
import { useForm, useFieldArray } from "react-hook-form";
import api from "../api/api";
import CustomSaveModel from "../components/CustomSaveModel";
import useSWRMutation from "swr/mutation";

const CreateCard = () => {
  const { register, control, handleSubmit } = useForm({});
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cards",
  });
  const toast = useToast();
  const modalSave = useDisclosure();
  const { trigger, isMutating } = useSWRMutation(
    "/sharing/add",
    (url: any, arg: any) => {
      return api.addListCard(arg.arg);
    }
  );
  const [currentCardId, setCurrentCardId] = useState<string>("");

  const onSubmit = async (data: any) => {
    try {
      const link = await trigger(data);
      const listCardId = (link as any).data.toString();
      setCurrentCardId(listCardId);
      modalSave.onOpen();
    } catch (error) {
      toast({
        title: "Error",
        description: JSON.stringify(error),
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <CustomSaveModel modalSave={modalSave} idCard={currentCardId} />
      <Nav />
      <WrapContainer >
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Flex mt={"4rem"} align={"baseline"} justifyContent="space-between">
            <Heading as={"h6"}>Create new set of card</Heading>
            <Button
              colorScheme="primary"
              variant="outline"
              type="submit"
              isLoading={isMutating}
            >
              Create
            </Button>
          </Flex>
          <Flex direction="column" gap="10px" width="40%">
            <Input
              placeholder="Title"
              focusBorderColor={"primary"}
              {...register("name")}
            />
            <Input
              placeholder="Description"
              colorScheme="primary"
              focusBorderColor={"primary"}
              {...register("desc")}
            />
          </Flex>
          <Box
            bg="white"
            borderWidth="1px"
            mt="40px"
            borderStyle="solid"
            borderColor="primary.50"
            borderRadius="8px"
            px="64px"
            py="12px"
          >
            {fields.map((item, index) => (
              <Card w={"full"} p={"16px"} my={"14px"} shadow="lg" key={index}>
                <Flex justifyContent="space-between" gap="32px">
                  <Input
                    placeholder="Your cards"
                    variant="flushed"
                    colorScheme="primary"
                    {...register(`cards.${index}.term`)}
                  />
                  <Input
                    placeholder="Your trans"
                    variant="flushed"
                    colorScheme="primary"
                    {...register(`cards.${index}.defi`)}
                  />
                  <Button variant="ghost" onClick={() => remove(index)}>
                    <DeleteIcon color="red" />
                  </Button>
                </Flex>
              </Card>
            ))}

            <Button
              type="button"
              colorScheme="primary"
              mt="20px"
              width="100%"
              onClick={() => append({ term: "", defi: "" })}
            >
              Create more cards
            </Button>
          </Box>
        </form>
      </WrapContainer>
    </>
  );
};

export default CreateCard;
