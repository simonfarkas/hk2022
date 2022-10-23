import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import "react-day-picker/dist/style.css";
import Modal from "react-modal";
import sk from "date-fns/locale/sk";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { Reminder, Userbar } from "../components";
import { calendarStyles, initArray, modalStyles } from "../types";
import logo from "../assets/logo.svg";

Modal.setAppElement("#root");

export const Home = () => {
  // set initArray first, then change it to empty array for some initial data
  const [reminders, setReminders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>("");
  const [inputDate, setInputDate] = useState<Date>();

  useEffect(() => {
    const getReminders = localStorage.getItem("reminders");
    if (getReminders) setReminders(JSON.parse(getReminders));
  }, []);

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName && inputDate) {
      const newReminder = {
        id: new Date().getTime(),
        name: inputName,
        date: inputDate?.setHours(0, 0, 0, 0),
        isDone: false,
        isShared: false,
        sharedWith: [
          {
            id: 2,
            name: "John Smith",
            profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
            isSharing: false,
          },
        ],
        author: {
          id: 1,
          name: "Simon Farkas",
          profile_pic: "https://htmlcolors.com/color-image/000.png",
        },
      };
      setReminders([...reminders, newReminder]);
      setIsFormOpen(false);
      setInputName("");
      setInputDate(undefined);
    }
  };

  // sort reminders by highest id -> the latest on top
  const sortedReminders = [...reminders].sort((a, b) => b.id - a.id);

  let footer = <Text>Vyberte deň</Text>;

  if (inputDate) {
    footer = <Text>Vybrali ste {format(inputDate, "dd.MM.yyyy")}.</Text>;
  }

  return (
    <Flex direction="column">
      <Image my={10} mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Modal
        isOpen={isFormOpen}
        onAfterOpen={() => setIsFormOpen(true)}
        onRequestClose={() => setIsFormOpen(false)}
        style={modalStyles}
      >
        <form onSubmit={handleSubmit}>
          <FormControl marginBottom={5}>
            <FormLabel>Názov</FormLabel>
            <Input
              required
              variant="flushed"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dátum</FormLabel>
            <style>{calendarStyles}</style>
            <DayPicker
              mode="single"
              selected={inputDate}
              onSelect={setInputDate}
              footer={footer}
              modifiersClassNames={{
                selected: "my-selected",
                today: "my-today",
              }}
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
      {sortedReminders.length === 0 && (
        <Text color="white" textAlign="center">
          Žiadne nové pripomienky
        </Text>
      )}
      <AnimatePresence>
        {sortedReminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            reminder={reminder}
            deleteReminder={() => handleDelete(reminder.id)}
            markDone={() => handleMarkDone(reminder.id)}
          />
        ))}
      </AnimatePresence>

      <Box mb={32}>
        <Box
          bg="tomato"
          color="white"
          p={2}
          position="fixed"
          borderRadius="50%"
          left="50%"
          bottom="20"
          transform="translateX(-50%)"
          onClick={() => setIsFormOpen(true)}
        >
          <BsPlus size={24} cursor="pointer" />
        </Box>
        <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
    </Flex>
  );
};
