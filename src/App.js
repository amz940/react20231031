import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set ... 메소드로 상태 변경 할 수 있다
  // 상태가 같은 지 아닌 지 판단해서 re-render 결정한다

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObjectChange() {
    // 틀린 코드 참조값을 들고 오는거기 때문에 틀리다
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);

    // 객체를 사용 할려면 새 객체를 복사해서 사용해야함
    // boolean, number ,string을 제외한 나머지 property를 사용할 때는 복사해서 사용
    const newNumberObject = { ...numberObject };
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
