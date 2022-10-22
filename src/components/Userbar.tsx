import React from "react";
import { Flex } from "@chakra-ui/react";
import { BiHome, BiUser } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

const ActiveTabStyles = {
  bg: "white",
  color: "black",
};

const InactiveTabStyles = {
  color: "white",
};

interface Props {
  activeTab: number;
  setActiveTab: any;
}

export const Userbar = ({ activeTab, setActiveTab }: Props) => {
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
        py={2}
        px={4}
        borderLeftRadius="lg"
        w="100%"
        {...(activeTab === 0 ? ActiveTabStyles : InactiveTabStyles)}
        onClick={() => setActiveTab(0)}
      >
        <BiHome size="24" />
      </Flex>
      <Flex
        direction="row"
        justify="center"
        py={2}
        px={4}
        w="100%"
        {...(activeTab === 1 ? ActiveTabStyles : InactiveTabStyles)}
        onClick={() => setActiveTab(1)}
      >
        <BsCalendarEvent size="24" />
      </Flex>
      <Flex
        direction="row"
        justify="center"
        py={2}
        px={4}
        borderRightRadius="lg"
        w="100%"
        {...(activeTab === 2 ? ActiveTabStyles : InactiveTabStyles)}
        onClick={() => setActiveTab(2)}
      >
        <BiUser size="24" />
      </Flex>
    </Flex>
  );
};
