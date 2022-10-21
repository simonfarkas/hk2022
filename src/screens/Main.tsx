import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/lato/latin-ext.css";
import { BiLogIn, BiUserPlus } from "react-icons/bi";

export const Main = () => {
  return (
    <Flex direction="column" experimental_spaceY={5}>
      <img src={logo} width={212} height={50} alt="logo" />
      <Button
        bg="secondary"
        color="white"
        colorScheme="none"
        experimental_spaceX={2}
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
      >
        <span>
          <BiUserPlus size={24} />
        </span>
        <span>Registrácia</span>
      </Button>
    </Flex>
  );
};
