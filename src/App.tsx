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
    <Box bg="main" maxW="375px" minH="100vh" mx="auto" pt={10} pb={20}>
      <Container
        h="100%"
        maxW="313px"
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
