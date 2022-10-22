import React, { useState } from "react";
import { Userbar } from "../components/Userbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsCalendar, BsPlus } from "react-icons/bs";
import { Remind } from "../components/Remind";

const initArray = [
  {
    id: 1,
    name: "Friday release",
    date: "21.10.2022",
    isDone: false,
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
    isDone: false,
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
    isDone: false,
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
    isDone: false,
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
    isDone: false,
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
    isDone: false,
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
];

export const Home = () => {
  const [reminds, setReminds] = useState<any[]>(initArray);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDelete = (id: number) => {
    const newArray = reminds.filter((remind) => remind.id !== id);
    setReminds(newArray);
  };

  const handleMarkDone = (id: number) => {
    const newArray = [...reminds];
    const updated = newArray.find((remind) => remind.id === id);
    updated.isDone = true;
    setReminds(newArray);
  };

  return (
    <Flex direction="column">
      {activeTab === 0 &&
        reminds.map((remind) => (
          <Remind
            key={remind.id}
            id={remind.id}
            name={remind.name}
            date={remind.date}
            author={remind.author}
            isDone={remind.isDone}
            deleteRemind={() => handleDelete(remind.id)}
            markDone={() => handleMarkDone(remind.id)}
          />
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
          onClick={() => setIsFormOpen(true)}
        >
          <BsPlus />
        </Box>
        <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
    </Flex>
  );
};
