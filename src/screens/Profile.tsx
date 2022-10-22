import React, { useState, useEffect } from "react";
import { Flex, Image, Text, Box, Input } from "@chakra-ui/react";
import { BiLogOut, BiTrashAlt } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";
import { Userbar } from "../components";
import { requestSharing, sharingWith } from "../types";
import logo from "../assets/logo.svg";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [sharing, setSharing] = useState(sharingWith);
  const [requests, setRequests] = useState(requestSharing);

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

  useEffect(() => {
    console.log(sharing);
    console.log(requests);
  }, [sharing, requests]);

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
              <BiLogOut size={24} />
              <IoSettingsSharp size={24} />
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

        {sharing.map((user) => (
          <Flex
            direction="column"
            bg="secondary"
            color="white"
            p={4}
            my={1}
            borderRadius="lg"
            w="100%"
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
                <BiTrash
                  size={24}
                  color="tomato"
                  onClick={() => handleDelete(user.id, "sharing")}
                />
              </Flex>
            </Flex>
          </Flex>
        ))}

        <Text fontSize={20} my={4}>
          Žiadosti:
        </Text>
        {requests.length > 0 && (
          <Box
            bg="secondary"
            color="white"
            p={4}
            my={1}
            borderRadius="lg"
            w="100%"
          >
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              bg="secondary"
            >
              {requests.map((user) => (
                <>
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
                    <TiTick
                      size={24}
                      color="green"
                      onClick={() => handleAccept(user.id)}
                    />
                    <BiTrashAlt
                      size={24}
                      color="tomato"
                      onClick={() => handleDelete(user.id, "requests")}
                    />
                  </Flex>
                </>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>

      <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </Flex>
  );
};
