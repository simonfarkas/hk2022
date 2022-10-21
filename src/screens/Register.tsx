import React, { ChangeEvent, FormEvent, useState } from "react";
import { Flex, Button, FormControl, Input, FormLabel } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/lato/latin-ext.css";
import { BiLogIn, BiUserPlus } from "react-icons/bi";

const rightName = "Simon Farkas";
const rightEmail = "simonfarkas@email.com";
const rightPassword = "password";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (
    email === rightEmail &&
    password === rightPassword &&
    name === rightName
  ) {
    // redirect user to home
  }

  return (
    <Flex direction="column" experimental_spaceY={5}>
      <img src={logo} width={212} height={50} alt="logo" />
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
        bg="secondary"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
      >
        <span>
          <BiLogIn size={24} />
        </span>
        <span>Registrovať sa</span>
      </Button>
    </Flex>
  );
};
