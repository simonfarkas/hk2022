import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import { AnimatePresence } from "framer-motion";
import sk from "date-fns/locale/sk";
import logo from "../assets/logo.svg";
import { Reminder, Userbar } from "../components";
import { calendarStyles, initArray } from "../types";
import { useTime } from "../hooks";

export const Calendar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [reminders, setReminders] = useState([]);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const getReminders = localStorage.getItem("reminders");
    if (getReminders) setReminders(JSON.parse(getReminders));
  }, []);

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // set hours for date to 00:00:00 for better date handling
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

  // sort reminders by highest id -> the latest on top
  const sortedReminders = [...reminders].sort((a, b) => b.id - a.id);

  return (
    <Box h="100%">
      <Image my={10} mx="auto" src={logo} width={212} height={50} alt="logo" />
      <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
        <style>{calendarStyles}</style>
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
        <AnimatePresence>
          {sortedReminders
            //@ts-ignore
            .filter((reminder) => useTime(reminder.date) === useTime(date))
            .map((reminder) => (
              <Reminder
                key={reminder.id}
                //@ts-ignore
                reminder={reminder}
                deleteReminder={() => handleDelete(reminder.id)}
                markDone={() => handleMarkDone(reminder.id)}
              />
            ))}
        </AnimatePresence>
      </Box>
      <Userbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </Box>
  );
};
