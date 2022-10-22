import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Button,
  FormControl,
  Input,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiArrowBack, BiLogIn } from "react-icons/bi";
import "@fontsource/lato/latin-ext.css";
import logo from "../assets/logo.svg";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      navigate("/home");
    }
  };

  return (
    <Flex direction="column" experimental_spaceY={5}>
      <Box cursor="pointer">
        <BiArrowBack color="white" size={24} onClick={() => navigate("/")} />
      </Box>
      <Image src={logo} width={212} height={50} alt="logo" mx="auto" />
      <form onSubmit={handleSubmit}>
        <Flex direction="column" experimental_spaceY={5}>
          <FormControl>
            <Input
              type="email"
              bg="secondary"
              variant="unstyled"
              placeholder="Meno"
              color="white"
              py={2}
              px={4}
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </FormControl>
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
          <Button
            bg="tomato"
            colorScheme="tomato"
            experimental_spaceX={2}
            onClick={() => navigate("/home")}
          >
            <span>
              <BiLogIn size={24} />
            </span>
            <Text fontWeight={300}>Registrovať sa</Text>
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
