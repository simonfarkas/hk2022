import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsCalendar, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineMinus } from "react-icons/ai";
import { customStyles } from "../types/modal.styles";
import { Props } from "../interfaces/IReminder";
import { IAuthor } from "../interfaces/IAuthor";

export const Reminder = ({ reminder, deleteReminder, markDone }: Props) => {
  const [isShareModal, setIsShareModal] = useState(false);

  return (
    <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
      <Modal
        isOpen={isShareModal}
        onAfterOpen={() => setIsShareModal(true)}
        onRequestClose={() => setIsShareModal(false)}
        style={customStyles}
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
                  <AiOutlineMinus size={24} />
                ) : (
                  <BsPlus size={24} />
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
            textDecoration={reminder.isDone ? "line-through" : "none"}
          >
            {reminder.name}
          </Text>
          <Text fontSize={12}>
            {reminder.author.name === "John Smith" && reminder.isShared
              ? "Zdieľané"
              : ""}
            {reminder.author.name === "Simon Farkas" && (
              <BsThreeDotsVertical
                color="white"
                size="12"
                onClick={() => setIsShareModal(true)}
              />
            )}
          </Text>
        </Flex>

        <Flex direction="row" align="center">
          <Image
            src={reminder.author.profile_pic}
            width={4}
            height={4}
            alt="profile_pic"
            borderRadius="lg"
          />
          <Text ml={2} fontSize={10}>
            {reminder.author.name}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mt={4}>
          <Flex direction="row" align="center">
            <BsCalendar />
            <Text ml={2}>{reminder.date.toLocaleDateString()}</Text>
          </Flex>
          <Flex direction="row" align="center" experimental_spaceX={2}>
            <BiTrash onClick={() => deleteReminder(reminder.id)} />
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
    </Box>
  );
};
