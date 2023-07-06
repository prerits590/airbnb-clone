import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log("User Signed in", user);
          setEmail("");
          setPassword("");
        }
      );

      toast({
        title: "Logged in",
        description: "Login Successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log("Error creating user:", error);
      toast({
        title: "Account Error",
        description: "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleCreateUser}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Link to={"/"}>Don't have an account? Sign up.</Link>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
