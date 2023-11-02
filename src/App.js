import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red"} h={"200px"}>
        <Square bg={"blue"} w={"100px"} h={"100px"} color={"white"}>
          Lorem.
        </Square>
      </Center>

      <Center bg={"red.500"} h={"200px"} w={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <QuestionIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
