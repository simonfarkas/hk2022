import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { BiHome, BiUser } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

export const Userbar = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      bg="purpleMain"
      borderRadius="lg"
      bottom={4}
      width="313px"
      position="fixed"
    >
      <Flex
        direction="row"
        justify="center"
        bg="white"
        py={2}
        px={4}
        borderLeftRadius="lg"
        w="100%"
      >
        <BiHome size="24" color="black" />
      </Flex>
      <Flex direction="row" justify="center" py={2} px={4} w="100%">
        <BsCalendarEvent size="24" color="white" />
      </Flex>
      <Flex
        direction="row"
        justify="center"
        py={2}
        px={4}
        borderRightRadius="lg"
        w="100%"
      >
        <BiUser size="24" color="white" />
      </Flex>
    </Flex>
  );
};
