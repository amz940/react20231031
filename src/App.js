import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set ... 메소드로 상태 변경 할 수 있다
  // 상태가 같은 지 아닌 지 판단해서 re-render 결정한다

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObjectChange() {
    numberObject.number = numberObject.number + 1;
    setNumberObject(numberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onclick={handleNumberObjectChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
