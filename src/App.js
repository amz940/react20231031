import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  function handleButtonClick() {
    // text라는 state를 값 변경
    setText("greeting");
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>상태 변경!</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
