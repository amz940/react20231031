import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  let navigate = useNavigate();

  return (
    <Box>
      <Button onClick={() => navigate("/path1?id=1")}>1번 고객 보기</Button>
      <Button onClick={() => navigate("/path1?id=2")}>2번 고객 보기</Button>
      <Button onClick={() => navigate("/path1?id=3")}>3번 고객 보기</Button>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function AComp() {
  const [customer, setCustomer] = useState(null);
  // query string 얻기
  const [searchParams] = useSearchParams();

  // console.log(searchParams);
  // console.log(searchParams.get("id"));
  // console.log(searchParams.toString());

  useEffect(() => {
    axios
      .get("api/main1/sub4?" + searchParams.toString())
      .then((response) => setCustomer(response.data));
  }, [searchParams]);

  return (
    <Box>
      {customer && (
        <Text>
          {searchParams.get("id")}번 고객명 {customer.name}
        </Text>
      )}
    </Box>
  );
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="path1" element={<AComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
