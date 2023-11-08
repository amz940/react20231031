import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동 시 useNavigate hook 사용 해야 한다
  const navigate = useNavigate();

  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/*경로 이동 시 javascript 코드를 그냥 쓰면 안된다*/}
          <Button onClick={() => (window.location.href = "/apath")}>
            a로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            b로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/apath")}>a로 가기</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>b로 가기</Button>
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
