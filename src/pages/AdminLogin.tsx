import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AdminLogin() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const navigate = useNavigate();
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });;
  const onSubmit = (data: { email: string; password: string }) => {
    if (data.email === "admin@gmail.com" && data.password === "123456")
      navigate("/admin");
    else {
      notify();
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        as={"form"}
        onSubmit={handleSubmit((data) => onSubmit(data as any))}
      >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to Admin Dashboard</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              {...register("email", { required: "Please enter your email" })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={"blue"} variant={"solid"} type="submit">
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
