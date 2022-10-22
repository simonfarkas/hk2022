import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Main } from "./screens/Main";
import { Home } from "./screens/Home";
import { Userbar } from "./components/Userbar";

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
]);

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
      <Container h="100%" maxW="313px" p={0} position="relative">
        <RouterProvider router={router} />
      </Container>
    </Box>
  );
}

export default App;
