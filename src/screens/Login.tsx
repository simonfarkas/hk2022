import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Flex,
  Button,
  FormControl,
  Input,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/lato/latin-ext.css";
import { BiArrowBack, BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const rightEmail = "simonfarkas@email.com";
const rightPassword = "password";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === rightEmail && password === rightPassword) {
      navigate("/home");
    } else {
      setError("Nesprávne údaje!");
    }
  };

  return (
    <Flex direction="column" experimental_spaceY={5}>
      <Box cursor="pointer">
        <BiArrowBack color="white" size={24} onClick={() => navigate("/")} />
      </Box>
      <Image mx="auto" src={logo} width={212} height={50} alt="logo" />
      <form onSubmit={handleSubmit}>
        <Flex direction="column" experimental_spaceY={5}>
          <FormControl>
            <Input
              type="email"
              bg="secondary"
              variant="unstyled"
              placeholder="Email"
              color="white"
              py={2}
              px={4}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              bg="secondary"
              variant="unstyled"
              placeholder="Heslo"
              color="white"
              py={2}
              px={4}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </FormControl>
          <Text color="white">{error}</Text>
          <Button
            bg="purpleMain"
            color="white"
            colorScheme="none"
            experimental_spaceX={2}
            type="submit"
          >
            <span>
              <BiLogIn size={24} />
            </span>
            <span>Prihlásiť sa</span>
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
