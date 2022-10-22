import React, { FormEvent, useEffect, useState } from "react";
import { Userbar } from "../components/Userbar";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { Reminder } from "../components/Reminder";
import Modal from "react-modal";
import { format } from "date-fns";
import sk from "date-fns/locale/sk";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { initArray } from "../initArray";
import { BiLogIn } from "react-icons/bi";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "313px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
  overlay: {
    background: "rgba(0,0,0,0.75)",
  },
};

export const Home = () => {
  const [reminders, setReminders] = useState<any[]>(initArray);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState<Date | string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReminder = {
      id: new Date().getTime(),
      name: inputName,
      date: format(inputDate as string, "dd.MM.yyyy"),
      author: {
        id: 1,
        name: "Simon Farkas",
        profile_pic: "https://htmlcolors.com/color-image/000.png",
      },
    };
    setReminders([...reminders, newReminder]);
    setIsFormOpen(false);
  };

  const sortedReminders = [...reminders].sort((a, b) => b.id - a.id);

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

  let footer = <Text>Vyberte deň</Text>;

  if (inputDate) {
    footer = <Text>Vybrali ste {format(inputDate, "dd.MM.yyyy")}.</Text>;
  }

  return (
    <Flex direction="column">
      <Modal
        isOpen={isFormOpen}
        onAfterOpen={() => setIsFormOpen(true)}
        onRequestClose={() => setIsFormOpen(false)}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <FormControl marginBottom={5}>
            <FormLabel>Nazov</FormLabel>
            <Input
              placeholder="test"
              required
              variant="flushed"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Datum</FormLabel>
            <DayPicker
              mode="single"
              selected={inputDate}
              onSelect={setInputDate}
              footer={footer}
              locale={sk}
            />
          </FormControl>
          <Button
            display="flex"
            mx="auto"
            bg="secondary"
            colorScheme="none"
            experimental_spaceX={2}
            type="submit"
            fontSize={12}
            w="75%"
            fontWeight={200}
            h="auto"
            px={5}
            py={2}
            rounded="2xl"
            my={4}
          >
            Pridať
          </Button>
        </form>
      </Modal>
      {activeTab === 0 &&
        sortedReminders.map((reminder) => (
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
