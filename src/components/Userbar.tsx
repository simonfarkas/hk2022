import React from "react";
import { Flex } from "@chakra-ui/react";
import { BiHome, BiUser } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ActiveTabStyles = {
  bg: "white",
  color: "secondary",
};

const InactiveTabStyles = {
  color: "white",
};

interface Props {
  activeTab: number;
  setActiveTab: (i: number) => void;
}

export const Userbar = ({ activeTab, setActiveTab }: Props) => {
  const navigate = useNavigate();
  const handleNavigate = (i: number) => {
    setActiveTab(i);
    if (i === 0) {
      navigate("/home");
    }
    if (i === 1) {
      navigate("/calendar");
    }
    if (i === 2) {
      navigate("/my-profile");
    }
  };
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      bg="tomato"
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
        onClick={() => handleNavigate(0)}
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
        onClick={() => handleNavigate(1)}
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
        onClick={() => handleNavigate(2)}
      >
        <BiUser size="24" />
      </Flex>
    </Flex>
  );
};
