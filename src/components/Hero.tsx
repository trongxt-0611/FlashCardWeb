import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import home1 from "../assets/HOME1.png";
import { useLocation, useNavigate } from "react-router-dom";
export default function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const apk =
    "https://drive.google.com/file/d/1tV3p0geZS24aqDHzc8lJcjaZqyCzph0X/view?usp=sharing";
  return (
    <Stack h={"60vh"} direction={{ base: "column", md: "row" }} py={"48px"}>
      <Flex p={10} flex={3} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "10%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "primary.400",
                zIndex: -1,
              }}
            >
              Flashcard
            </Text>
            <br />{" "}
            <Text color={"blue.500"} as={"span"}>
              Nihongo
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The best app for studying. Improve your language learning, memorize
            study material and prepare for exams with Flashcards World.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"primary.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link href={apk} download={"FlashCard-APK"} target="_blank">
                Download APK
              </Link>
            </Button>
            <Button
              rounded={"full"}
              onClick={() => {
                if (location.pathname === "/create-card") {
                  navigate("/", { replace: true });
                  return;
                }
                navigate("/create-card");
              }}
            >
              Create Cards
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image objectFit={"cover"} alt={"Login Image"} src={home1} />
      </Flex>
    </Stack>
  );
}
