import { Input, NumberInput, Text } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);

  const isOdd = number % 2 == 1;

  function handleInputChange(e) {
    setNumber(Number(e.target.value));
  }

  return (
    <div>
      <Input type="number" onChange={handleInputChange} />
      <Text>{isOdd && "홀수"}</Text>
      <Text>{isOdd || "짝수"}</Text>
    </div>
  );
}

export default App;
