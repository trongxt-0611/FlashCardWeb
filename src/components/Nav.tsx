import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import WrapContainer from "./WrapContainer";
import logo from "../assets/logo.png";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box bg={useColorModeValue("purple.100", "purple.600")}>
      <WrapContainer>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              marginRight={"10px"}
              boxSize="40px"
              src={logo}
              alt="Dan Abramov"
              cursor={"pointer"}
              onClick={() => {
                if (location.pathname === "/create-card") {
                  navigate("/", { replace: true });
                  return;
                }
                navigate("/create-card");
              }}
            />
            <Text
              fontSize={"xl"}
              as={"b"}
              cursor={"pointer"}
              onClick={() => {
                if (location.pathname === "/create-card") {
                  navigate("/", { replace: true });
                  return;
                }
                navigate("/create-card");
              }}
            >
              FLASHCARD
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                colorScheme={"primary"}
                onClick={() => {
                  if (location.pathname === "/create-card") {
                    navigate("/", { replace: true });
                    return;
                  }
                  navigate("/create-card");
                }}
              >
                {location.pathname === "/create-card" ? "Home" : "Create Cards"}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </WrapContainer>
    </Box>
  );
}
