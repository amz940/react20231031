import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  // 0번째 인덱스는 상태
  // 1번째 인덱스는 바뀌는 상태
  let [number, setNumber] = useState(0);
  function handleClick() {
    // number++;
    setNumber(number + 1);
    // 2번 누를때 마다 하나씩 올라간다
    // setNumber(number++);
    console.log(number);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
