import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcShare, FcTodoList } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";
import { RiWifiOffLine } from "react-icons/ri";
import { GrStorage } from "react-icons/gr";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Feature() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Key Features
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Discover the array of features our app offers, designed to enhance
          your learning experience and help you achieve your academic goals.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Multiple Study Modes"}
            icon={<Icon as={FcTodoList} w={10} h={10} />}
            description={
              "Keeps you engaged when studying with the different study modes."
            }
            href={"#"}
          />
          <Card
            heading={"Works Offline"}
            icon={<Icon as={RiWifiOffLine} w={10} h={10} color={"black"} />}
            description={"Study from anywhere, even when traveling."}
            href={"#"}
          />
          <Card
            heading={"Share sets"}
            icon={<Icon as={FcShare} w={10} h={10} />}
            description={"Share your study material with your friends."}
            href={"#"}
          />
          <Card
            heading={"Customizations"}
            icon={<Icon as={BiCustomize} w={10} h={10} color={"black"} />}
            description={"Customize your study modes, cards, sets, and more."}
            href={"#"}
          />
          <Card
            heading={"Backup Your Data"}
            icon={<Icon as={GrStorage} w={10} h={10} />}
            description={"Keep your all cards safe"}
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
