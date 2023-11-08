import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);
  console.log(color + " : re render");

  useEffect(() => {
    console.log(color + " : initial render"); // 첫 렌더링 할때만 적용
  }, []);

  return (
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  // 부모가 렌더링 될 때 자식도 렌더링 됨
  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  const [gold, setGold] = useState("");

  console.log("부모 re-render");

  return (
    <div>
      <Box>
        <Text>부모</Text>
        <Button onClick={() => setNumber(number + 1)}>증가</Button>
        <Text>{number}</Text>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setSecondToggle(e.target.checked)}
        ></Checkbox>
        파란 박스 토글
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setGold(e.target.checked)}
        ></Checkbox>
        골드 박스 토글
      </Box>
      <Box mt={5}>
        <Text>자식들</Text>
        <MyComp color={"red"} />

        {secondToggle && <MyComp color={"blue"} />}

        <Box sx={{ display: gold ? "block" : "none" }}>
          <MyComp color={"gold"} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
