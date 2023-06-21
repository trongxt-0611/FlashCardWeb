import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import home1 from "../assets/HOME1.png";

const options = [
  { id: 1, desc: "Basic Flashcards review" },
  { id: 2, desc: "Select the correct answers" },
  { id: 3, desc: "Pick the pair correct card" },
  { id: 4, desc: "Pick the pair correct card" },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  checked?: boolean;
  image: string;
  text: string;
}
const PackageTier = ({
  title,
  options,
  checked = false,
  image,
  text,
}: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"xl"}>{title}</Heading>
    </Stack>
  );
};
const Pricing = () => {
  return (
    <Box py={6} px={5}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Check out the different{" "}
              <Text color="primary.400">Study Modes</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Experience a dynamic and immersive learning journey with a diverse
              range of study modes that cater to your learning style and keep
              you engaged throughout your study sessions.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          title={"Flashcards Review"}
          options={options}
          image={home1}
          text={options[0].desc}
        />
        <Divider />
        <PackageTier
          title={"Matching cards"}
          options={options}
          image={home1}
          text={options[1].desc}
        />
        <Divider />
        <PackageTier
          title={"Multiple answers"}
          options={options}
          image={home1}
          text={options[2].desc}
        />
        <Divider />
        <PackageTier
          title={"Drawing answers"}
          options={options}
          image={home1}
          text={options[3].desc}
        />
      </Stack>
    </Box>
  );
};

export default Pricing;
