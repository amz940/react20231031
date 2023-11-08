import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      공통된 요소들
      <Outlet />
    </Box>
  );
}

function BComp() {
  return <Box>b 컴포</Box>;
}

function AComp() {
  return <Box>a 컴포</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
