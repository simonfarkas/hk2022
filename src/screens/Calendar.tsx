import React, { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import sk from "date-fns/locale/sk";
import { initArray } from "../types/initArray";
import { Reminder } from "../components/Reminder";
import { Userbar } from "../components/Userbar";
import logo from "../assets/logo.svg";

export const Calendar = () => {
  const [reminders, setReminders] = useState(initArray);
  const [activeTab, setActiveTab] = useState(1);
  const [date, setDate] = useState<Date>(new Date());

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

  date.setHours(0, 0, 0, 0);

  const sortedReminders = [...reminders].sort((a, b) => b.id - a.id);

  return (
    <Box h="100%">
      <Image my={10} mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={sk}
        />
        {sortedReminders
          .filter(
            (reminder) =>
              reminder.date.toLocaleDateString() === date.toLocaleDateString()
          )
          .map((reminder) => (
            <Reminder
              key={reminder.id}
              reminder={reminder}
              deleteReminder={() => handleDelete(reminder.id)}
              markDone={() => handleMarkDone(reminder.id)}
            />
          ))}
      </Box>
      <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </Box>
  );
};
