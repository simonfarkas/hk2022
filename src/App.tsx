import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register, Main, Home, Calendar, Profile } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/my-profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <Box bg="main" maxW="480px" minH="100vh" mx="auto" pb={32}>
      <Container
        h="100%"
        maxW="320px"
        p={0}
        position="relative"
        overflowX="hidden"
      >
        <RouterProvider router={router} />
      </Container>
    </Box>
  );
}

export default App;
