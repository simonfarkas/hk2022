import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Text,
} from "@chakra-ui/react";
import Modal from "react-modal";
import { BsCalendarEvent, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { motion } from "framer-motion";
import { modalStyles } from "../types";
import { Props, IAuthor } from "../interfaces";
import { useTime } from "../hooks";

export const Reminder = ({ reminder, deleteReminder, markDone }: Props) => {
  const [isShareModal, setIsShareModal] = useState<boolean>(false);

  const MotionBox = motion(Box);

  return (
    <MotionBox
      bg="secondary"
      color="white"
      p={4}
      my={1}
      borderRadius="lg"
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Modal
        isOpen={isShareModal}
        onAfterOpen={() => setIsShareModal(true)}
        onRequestClose={() => setIsShareModal(false)}
        style={modalStyles}
      >
        <form>
          <FormControl marginBottom={5}>
            <FormLabel>Zdieľať s:</FormLabel>
          </FormControl>
          <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
            {reminder.sharedWith.map((user: IAuthor) => (
              <Flex
                direction="row"
                align="center"
                justify="space-between"
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
                {user.isSharing ? (
                  <AiOutlineMinus size={24} cursor="pointer" />
                ) : (
                  <BsPlus size={24} cursor="pointer" />
                )}
              </Flex>
            ))}
          </Box>
        </form>
      </Modal>
      <Flex direction="column">
        <Flex direction="row" align="center" justify="space-between">
          <Text
            maxW="md"
            fontSize={20}
            textDecoration={reminder.isDone ? "line-through" : "none"}
          >
            {reminder.name}
          </Text>
          <Text fontSize={14}>
            {reminder.author.name === "John Smith" && reminder.isShared
              ? "Zdieľané"
              : ""}
            {reminder.author.name === "Simon Farkas" && (
              <BsThreeDotsVertical
                color="white"
                size="12"
                onClick={() => setIsShareModal(true)}
                cursor="pointer"
              />
            )}
          </Text>
        </Flex>

        <Flex direction="row" align="center">
          <Image
            src={reminder.author.profile_pic}
            width={5}
            height={5}
            alt="profile_pic"
            borderRadius="lg"
          />
          <Text ml={2} fontSize={14}>
            {reminder.author.name}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mt={4}>
          <Flex direction="row" align="center">
            <BsCalendarEvent />
            <Text ml={2}>{useTime(reminder.date)}</Text>
          </Flex>
          <Flex direction="row" align="center" experimental_spaceX={2}>
            <BiTrashAlt
              onClick={() => deleteReminder(reminder.id)}
              color="tomato"
              size={18}
              cursor="pointer"
            />
            {!reminder.isDone && (
              <Button
                bg="white"
                color="black"
                colorScheme="none"
                fontSize={12}
                fontWeight={200}
                h="auto"
                px={4}
                py={1}
                rounded="2xl"
                onClick={() => markDone(reminder.id)}
              >
                Hotovo
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </MotionBox>
  );
};
