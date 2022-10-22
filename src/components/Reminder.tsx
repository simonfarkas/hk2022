import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BsCalendar } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import React from "react";

interface Author {
  name: string;
  profile_pic: string;
}

interface Reminder {
  id: number;
  name: string;
  date: string;
  isDone: boolean;
  author: Author;
  deleteReminder: (id: number) => void;
  markDone: (id: number) => void;
}

export const Reminder = ({
  id,
  name,
  date,
  isDone,
  author,
  deleteReminder,
  markDone,
}: Reminder) => {
  return (
    <Box bg="secondary" color="white" p={4} my={1} borderRadius="lg">
      <Flex direction="column">
        <Text textDecoration={isDone ? "line-through" : "none"}>{name}</Text>
        <Flex direction="row" align="center">
          <Image
            src={author.profile_pic}
            width={4}
            height={4}
            alt="profile_pic"
            borderRadius="lg"
          />
          <Text ml={2} fontSize={10}>
            {author.name}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" mt={4}>
          <Flex direction="row" align="center">
            <BsCalendar />
            <Text ml={2}>{date}</Text>
          </Flex>
          <Flex direction="row" align="center" experimental_spaceX={2}>
            <BiTrash onClick={() => deleteReminder(id)} />
            {!isDone && (
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
                onClick={() => markDone(id)}
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
