import React from "react";
import { Userbar } from "../components/Userbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsCalendar, BsPlus } from "react-icons/bs";

const reminds = [
  {
    id: 1,
    name: "Friday release",
    date: "21.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 2,
    name: "HK2022",
    date: "23.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 3,
    name: "HK2022",
    date: "23.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 4,
    name: "HK2022",
    date: "23.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 5,
    name: "HK2022",
    date: "23.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 6,
    name: "HK2022",
    date: "23.10.2022",
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
];

export const Home = () => {
  return (
    <Flex direction="column">
      {reminds.map((remind) => (
        <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
          <Flex direction="column">
            <Text>{remind.name}</Text>
            <Flex direction="row" align="center">
              <Image
                src={remind.author.profile_pic}
                width={4}
                height={4}
                alt="profile_pic"
                borderRadius="lg"
              />
              <Text ml={2} fontSize={10}>
                {remind.author.name}
              </Text>
            </Flex>
            <Flex direction="row" align="center" mt={4}>
              <BsCalendar />
              <Text ml={2}>{remind.date}</Text>
            </Flex>
          </Flex>
        </Box>
      ))}
      <Box mb={32}>
        <Box
          bg="white"
          p={2}
          position="fixed"
          borderRadius="50%"
          left="50%"
          bottom="20"
          transform="translateX(-50%)"
        >
          <BsPlus />
        </Box>
        <Userbar />
      </Box>
    </Flex>
  );
};
