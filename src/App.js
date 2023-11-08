import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

let routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/*경로가 바뀔 때 마다 초기 렌더링이 된다*/}
      <Route path="/" element={<Box>home page</Box>} />
      <Route path="/path1" element={<Box>경로1</Box>} />
      <Route path="/path2" element={<Box>경로2</Box>} />
      <Route path="/path3" element={<Box>경로3</Box>} />
      <Route path="/main/path1" element={<Box>경로4</Box>} />
      <Route path="/main/path2" element={<Box>경로5</Box>} />
      {/*공통된 주소가 있을 시 한코드에 묶을 수 있다, 중첩해서 사용 할 시 개별 주소 앞에 / 붙이면 안된다*/}
      <Route path="/main2">
        <Route path="path1" element={<Box>경로6</Box>} />
        <Route path="path2" element={<Box>경로7</Box>} />
        <Route path="path3">
          <Route path="sub1" element={<Box>경로8</Box>} />
          <Route path="sub2" element={<Box>경로9</Box>} />
        </Route>
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
