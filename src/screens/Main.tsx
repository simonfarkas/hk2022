import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/lato/latin-ext.css";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" experimental_spaceY={5}>
      <Image mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Button
        bg="secondary"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
        onClick={() => navigate("/login")}
      >
        <span>
          <BiLogIn size={24} />
        </span>
        <span>Prihlásiť sa</span>
      </Button>
      <Button
        bg="secondary"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
        onClick={() => navigate("/register")}
      >
        <span>
          <BiUserPlus size={24} />
        </span>
        <span>Registrácia</span>
      </Button>
    </Flex>
  );
};
