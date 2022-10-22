import React, { useState } from "react";
import { Userbar } from "../components/Userbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsCalendar, BsPlus } from "react-icons/bs";
import { Reminder } from "../components/Reminder";

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
  const [reminders, setReminders] = useState<any[]>(initArray);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDelete = (id: number) => {
    const newArray = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newArray);
  };

  const handleMarkDone = (id: number) => {
    const newArray = [...reminders];
    const updated = newArray.find((reminder) => reminder.id === id);
    updated.isDone = true;
    setReminders(newArray);
  };

  return (
    <Flex direction="column">
      {activeTab === 0 &&
        reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            id={reminder.id}
            name={reminder.name}
            date={reminder.date}
            author={reminder.author}
            isDone={reminder.isDone}
            deleteReminder={() => handleDelete(reminder.id)}
            markDone={() => handleMarkDone(reminder.id)}
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
