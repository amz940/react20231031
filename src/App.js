import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/*react-router 사용시 a 태그 사용 금지*/}
          <a href="/apath">에이로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">비로 가기</a>
        </Box>
        {/*대신 Link Component 사용할 것*/}
        <Box>
          <Link to={"/apath"}>에이로 가기</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>비로 가기</Link>
        </Box>
      </Flex>
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
