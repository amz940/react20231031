import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handlePlusButtonClick(e) {
    setNumber(number + 1);
  }
  function handleMinusButtonClick(e) {
    setNumber(number - 1);
  }
  // 간단한 함수를 쓸때는 에로우 펑션으로 사용하는게 편하다
  return (
    <div>
      <input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusButtonClick}>+</Button>
        <Button onClick={handleMinusButtonClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}> + </Button>
        <Button onClick={() => setNumber(number - 1)}> - </Button>
      </Box>
    </div>
  );
}

export default App;
