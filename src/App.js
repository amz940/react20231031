import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라때", "아아", "디카페인"];

  const Items = arr.map((item) => <ListItem>{item}</ListItem>);
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
          {arr2.map((abc) => (
            <ListItem>{abc}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
