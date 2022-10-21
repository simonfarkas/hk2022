import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Main } from "./screens/Main";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

function App() {
  return (
    <Box
      bg="main"
      maxW="375px"
      minH="667px"
      mx="auto"
      fontWeight="200"
      paddingTop={110}
    >
      <Container maxW="251px">
        <Register />
      </Container>
    </Box>
  );
}

export default App;
