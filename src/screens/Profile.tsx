import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Image, Text, Input } from "@chakra-ui/react";
import { BiLogOut, BiTrashAlt } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import { Userbar } from "../components";
import { requestSharing, sharingWith } from "../types";
import logo from "../assets/logo.svg";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const [sharing, setSharing] = useState<any[]>(sharingWith);
  const [requests, setRequests] = useState<any[]>(requestSharing);

  const navigate = useNavigate();

  const handleAccept = (id: number) => {
    const request = requests.find((r) => r.id === id);
    //@ts-ignore
    setSharing([...sharing, request]);
    const filter = requests.filter((r) => r.id !== id);
    setRequests(filter);
  };

  const handleDelete = (id: number, type: string) => {
    if (type === "requests") {
      setRequests((requests) =>
        requests.filter((r) => {
          return r.id !== id;
        })
      );
    }
    if (type === "sharing") {
      setSharing((sharing) =>
        sharing.filter((s) => {
          return s.id !== id;
        })
      );
    }
  };

  const MotionFlex = motion(Flex);

  return (
    <Flex direction="column">
      <Image my={10} mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Flex direction="column" align="start" color="white">
        <Flex
          direction="row"
          justify="start"
          align="center"
          experimental_spaceX={4}
        >
          <Image
            mb={4}
            mx="auto"
            src="https://htmlcolors.com/color-image/000.png"
            width={24}
            height={24}
            alt="logo"
            borderRadius="50%"
          />
          <Flex direction="column">
            <Text fontSize={24}>Simon Farkas</Text>
            <Text fontSize={16}>simonfarkas@email.com</Text>
            <Flex direction="row" align="center" experimental_spaceX={2} mt={2}>
              <BiLogOut
                size={24}
                onClick={() => navigate("/")}
                cursor="pointer"
              />
              <IoSettingsSharp size={24} cursor="pointer" />
            </Flex>
          </Flex>
        </Flex>
        <Text fontSize={20} mt={4}>
          Pridať:
        </Text>
        <Input
          type="email"
          bg="secondary"
          variant="unstyled"
          placeholder="Email"
          color="white"
          py={2}
          px={4}
          my={4}
        />
        <Text fontSize={20}>Zdieľané s:</Text>
        {sharing.length === 0 ? (
          <Text mx="auto" my={2} color="grayMain">
            Nezdieľaté s nikým
          </Text>
        ) : null}
        <AnimatePresence>
          {sharing.map((user) => (
            <MotionFlex
              key={user.id}
              direction="column"
              bg="secondary"
              color="white"
              p={4}
              my={1}
              borderRadius="lg"
              w="100%"
              inital={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, scale: 0, animationDuration: 500 }}
            >
              <Flex
                direction="row"
                align="center"
                justify="space-between"
                bg="secondary"
              >
                <Flex align="center" key={user.id}>
                  <Image
                    src={user.profile_pic}
                    width={8}
                    height={8}
                    alt="profile_pic"
                    borderRadius="50%"
                  />
                  <Text ml={2}>{user.name}</Text>
                </Flex>
                <Flex direction="row" align="center" experimental_spaceX={4}>
                  <BiTrashAlt
                    size={24}
                    color="tomato"
                    onClick={() => handleDelete(user.id, "sharing")}
                  />
                </Flex>
              </Flex>
            </MotionFlex>
          ))}
        </AnimatePresence>

        <Text fontSize={20} my={4}>
          Žiadosti:
        </Text>
        {requests.length === 0 ? (
          <Text mx="auto" my={2} color="grayMain">
            Nemáte nové žiadosti
          </Text>
        ) : null}
        <AnimatePresence>
          {requests.length > 0 && (
            <MotionFlex
              direction="row"
              align="center"
              bg="secondary"
              color="white"
              p={4}
              my={1}
              borderRadius="lg"
              w="100%"
              inital={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, animationDuration: 500 }}
            >
              {requests.map((user) => (
                <Flex
                  direction="row"
                  align="center"
                  justify="space-between"
                  bg="secondary"
                  w="100%"
                  key={user.id}
                >
                  <Flex align="center">
                    <Image
                      src={user.profile_pic}
                      width={8}
                      height={8}
                      alt="profile_pic"
                      borderRadius="50%"
                    />
                    <Text ml={2}>{user.name}</Text>
                  </Flex>
                  <Flex direction="row" align="center" experimental_spaceX={4}>
                    <TiTick
                      size={24}
                      color="green"
                      onClick={() => handleAccept(user.id)}
                      cursor="pointer"
                    />
                    <BiTrashAlt
                      size={24}
                      color="tomato"
                      onClick={() => handleDelete(user.id, "requests")}
                      cursor="pointer"
                    />
                  </Flex>
                </Flex>
              ))}
            </MotionFlex>
          )}
        </AnimatePresence>
      </Flex>

      <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </Flex>
  );
};
