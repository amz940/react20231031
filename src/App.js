import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라때", "아아", "디카페인"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];

  const Items = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  // let map = arr2.map((abc) => <ListItem>{abc}</ListItem>);

  return (
    <div>
      <Box mb={3}>
        {/*<List>*/}
        {/*  <ListItem{arr[0]}></ListItem>*/}
        {/*  <ListItem{arr[1]}></ListItem>*/}
        {/*  <ListItem{arr[2]}></ListItem>*/}
        {/*  <ListItem{arr[3]}></ListItem>*/}
        {/*</List>*/}
        <List>{Items}</List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((abc, index) => (
            <ListItem key={index}>{abc}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((e, i) => (
            <ListItem key={i}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
