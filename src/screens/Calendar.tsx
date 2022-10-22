import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import sk from "date-fns/locale/sk";
import { initArray } from "../types/initArray";
import { Reminder } from "../components/Reminder";
import { Userbar } from "../components/Userbar";
import logo from "../assets/logo.svg";
import { css } from "../types/calendar.styles";

export const Calendar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [reminders, setReminders] = useState(initArray);
  const [date, setDate] = useState<Date>(new Date());

  date.setHours(0, 0, 0, 0);

  const handleDelete = (id: number) => {
    const newArray = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newArray);
  };

  const handleMarkDone = (id: number) => {
    const newArray = [...reminders];
    const updated = newArray.find((reminder) => reminder.id === id);
    updated!.isDone = true;
    setReminders(newArray);
  };

  const sortedReminders = [...reminders].sort((a, b) => b.id - a.id);

  return (
    <Box h="100%">
      <Image my={10} mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
        <style>{css}</style>
        <DayPicker
          mode="single"
          required
          selected={date}
          //@ts-ignore
          onSelect={setDate}
          locale={sk}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}
        />
        {sortedReminders
          .filter(
            (reminder) =>
              reminder.date.toLocaleDateString() === date.toLocaleDateString()
          )
          .map((reminder) => (
            <Reminder
              key={reminder.id}
              //@ts-ignore
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
