import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import "@fontsource/lato/latin-ext.css";
import logo from "../assets/logo.svg";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" experimental_spaceY={5}>
      <Image mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Button
        bg="tomato"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
        onClick={() => navigate("/login")}
      >
        <span>
          <BiLogIn size={24} />
        </span>
        <Text fontWeight={300}>Prihlásenie</Text>
      </Button>
      <Button
        bg="tomato"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
        onClick={() => navigate("/register")}
      >
        <span>
          <BiUserPlus size={24} />
        </span>
        <Text fontWeight={300}>Registrácia</Text>
      </Button>
    </Flex>
  );
};
